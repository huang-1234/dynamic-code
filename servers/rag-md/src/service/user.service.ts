import {
  WSController,
  OnWSConnection,
  Inject,
  OnWSMessage,
} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@WSController('/rag')
export class RAGSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async handleConnection() {
    this.ctx.socket.emit('connected');
  }

  @OnWSMessage('query')
  async handleQuery(query: string) {
    console.log('query', query);
    this.ctx.socket.emit('progress', 10);
    // 处理查询逻辑
    this.ctx.socket.emit('progress', 100);
  }
}
