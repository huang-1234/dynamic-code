import { Context, Next } from 'koa';
import Redis from 'ioredis';

// 客户端连接管理
const clients = new Map<string, { ctx: Context; heartbeat: NodeJS.Timeout }>();
const clientWeakMap = new WeakMap<Context, string>();

// Redis连接（集群部署时使用）
let publisher: Redis | null = null;
let subscriber: Redis | null = null;

// 初始化Redis连接
export function initRedisCluster(redisUrl: string) {
  publisher = new Redis(redisUrl);
  subscriber = new Redis(redisUrl);

  subscriber.subscribe('sse_channel', (err) => {
    if (err) console.error('Redis subscribe error:', err);
  });

  subscriber.on('message', (channel, message) => {
    if (channel === 'sse_channel') {
      broadcast(message);
    }
  });
}

// SSE中间件
export default function sseMiddleware() {
  return async (ctx: Context, next: Next) => {
    if (ctx.path !== '/sse') return next();

    // 1. 设置SSE响应头
    ctx.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });

    // 2. 创建唯一客户端ID
    const clientId = `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    clients.set(clientId, {
      ctx,
      heartbeat: setInterval(() => sendHeartbeat(ctx), 25000)
    });
    clientWeakMap.set(ctx, clientId);

    // 3. 处理断点续传
    const lastEventId = ctx.headers['last-event-id'] || '0';
    ctx.res.write(`retry: 10000\nid: ${lastEventId}\n\n`);

    // 4. 连接关闭处理
    ctx.req.on('close', () => {
      const id = clientWeakMap.get(ctx);
      if (id) {
        const client = clients.get(id);
        if (client) clearInterval(client.heartbeat);
        clients.delete(id);
      }
    });

    // 5. 保持连接打开
    ctx.status = 200;
    ctx.body = null;
  };
}

// 发送心跳包
function sendHeartbeat(ctx: Context) {
  try {
    ctx.res.write(':heartbeat\n\n');
    // ctx.res.flush();
  } catch (e) {
    console.warn('Client disconnected, removing from pool');
  }
}

// 发送消息到单个客户端
export function sendToClient(clientId: string, data: any, eventType?: string, eventId?: string) {
  const client = clients.get(clientId);
  if (!client) return;

  const { ctx } = client;
  let message = '';

  if (eventType) message += `event: ${eventType}\n`;
  if (eventId) message += `id: ${eventId}\n`;

  if (Buffer.isBuffer(data)) {
    message += `data: ${data.toString('base64')}\n\n`;
  } else {
    message += `data: ${JSON.stringify(data)}\n\n`;
  }

  try {
    ctx.res.write(message);
    // ctx.res.flush();
  } catch (e) {
    console.error('Error sending to client:', e);
  }
}

// 广播消息到所有客户端
export function broadcast(data: any, eventType?: string) {
  const message = JSON.stringify({ data, eventType });

  // 集群部署时通过Redis广播
  if (publisher) {
    publisher.publish('sse_channel', message);
    return;
  }

  // 单机部署直接广播
  for (const [id] of clients) {
    sendToClient(id, data, eventType);
  }
}

// 批处理消息发送
export function createBatchSender(windowSize = 100, timeout = 100) {
  let batchQueue: any[] = [];
  let timer: NodeJS.Timeout | null = null;

  return (data: any) => {
    batchQueue.push(data);

    if (!timer) {
      timer = setTimeout(() => {
        if (batchQueue.length > 0) {
          broadcast({ batch: batchQueue }, 'batch-update');
          batchQueue = [];
        }
        timer = null;
      }, timeout);
    }

    if (batchQueue.length >= windowSize) {
      clearTimeout(timer!);
      broadcast({ batch: batchQueue }, 'batch-update');
      batchQueue = [];
      timer = null;
    }
  };
}

// 安全中间件示例
export function authMiddleware() {
  return async (ctx: Context, next: Next) => {
    if (ctx.path === '/sse' && !validateToken(ctx.headers.authorization)) {
      ctx.status = 401;
      ctx.body = 'Unauthorized';
      return;
    }
    await next();
  };
}

function validateToken(token: string | undefined): boolean {
  // 实现实际的token验证逻辑
  return !!token; // 示例实现
}
