import { MidwayConfig } from '@midwayjs/core';

export default {
  // 安全密钥
  keys: '1752470784244_221',

  // Koa配置
  koa: {
    port: 7001,
  },

  // Redis配置
  redis: {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  },

  // Socket.IO配置
  socketIO: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  },

  // Swagger文档配置
  swagger: {
    title: '大模型SSE聊天服务',
    description: '基于MidwayJS的大模型SSE聊天服务API文档',
    version: '1.0.0',
  },

  // 大模型配置
  aiModel: {
    provider: 'openai', // 或 'aliyun'
    apiKey: 'your-api-key',
    apiEndpoint: 'https://api.openai.com/v1',
    defaultModel: 'gpt-3.5-turbo',
  },

  // SSE配置
  sse: {
    heartbeatInterval: 30000, // 心跳间隔(ms)
    maxConnectionAge: 180000, // 最大连接时长(ms)
    tokenRate: 50, // 令牌桶限流(tokens/s)
  },
} as MidwayConfig;
