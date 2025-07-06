import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { RAGSocketController } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: RAGSocketController;

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.handleQuery(uid);
    return { success: true, message: 'OK', data: user };
  }
}
