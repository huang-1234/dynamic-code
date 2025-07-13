const Koa = require('koa');
const sse = require('./koa-sse/index'); // 导入SSE中间件

const app = new Koa();

// 初始化Redis集群（生产环境需要）
// sse.initRedisCluster('redis://your-redis-url:6379');

// 使用安全认证中间件（可选）
// app.use(sse.authMiddleware());

// 使用SSE中间件
app.use(sse.sseMiddleware());

// 示例路由 - 发送通知到所有客户端
app.use(async (ctx) => {
  if (ctx.path === '/notify') {
    // 广播消息到所有客户端
    sse.broadcast({ message: 'System update' }, 'notification');
    ctx.body = 'Notification sent to all clients';
  }
});

// 示例路由 - 发送批处理消息
app.use(async (ctx) => {
  if (ctx.path === '/batch') {
    // 创建批处理发送器
    const batchSender = sse.createBatchSender();

    // 模拟批量数据
    for (let i = 0; i < 50; i++) {
      batchSender({ id: i, value: Math.random() });
    }

    ctx.body = 'Batch data sent';
  }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SSE server running on port ${PORT}`);
  console.log(`SSE endpoint: http://localhost:${PORT}/sse`);
});