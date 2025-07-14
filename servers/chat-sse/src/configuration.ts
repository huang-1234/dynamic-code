import { Configuration, ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import * as koa from '@midwayjs/koa';
import * as redis from '@midwayjs/redis';
import * as socketio from '@midwayjs/socketio';
import * as swagger from '@midwayjs/swagger';
import * as defaultConfig from './config/config.default';
import * as prodConfig from './config/config.prod';

@Configuration({
  imports: [faas, koa, redis, socketio, swagger],
  importConfigs: [
    {
      default: defaultConfig,
      prod: prodConfig,
    },
  ],
  conflictCheck: true,
})
export class MainConfiguration implements ILifeCycle {
  async onReady() {
    // 初始化逻辑
  }
}
