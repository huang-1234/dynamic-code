// RadarReport.test.ts
import { RadarReport } from './radar-report';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('RadarReport', () => {
  // 初始化配置
  const mockConfig = {
    reportUrl: 'https://api.example.com/report',
    maxRetries: 2,
    batchSize: 2
  };
  let radar: RadarReport;

  // 模拟全局对象
  beforeEach(() => {
    vi.useFakeTimers(); // 模拟定时器 [7](@ref)
    vi.spyOn(navigator, 'sendBeacon').mockReturnValue(true); // 模拟 sendBeacon
    global.fetch = vi.fn(() => Promise.resolve(new Response(null, { status: 200 }))); // 模拟 fetch
    localStorage.clear(); // 清空 localStorage
    radar = new RadarReport(mockConfig);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // 测试 1：基础功能
  describe('基础功能', () => {
    it('初始化时加载离线数据', () => {
      localStorage.setItem('radar_offline_data', JSON.stringify([{ id: 1 }]));
      const radarWithData = new RadarReport();
      expect(radarWithData.getQueueStats().offlineData).toBe(1); // [9](@ref)
    });

    it('上报数据加入队列', () => {
      radar.report({ event: 'click' });
      expect(radar.getQueueStats().mainQueue).toBe(1);
    });
  });

  // 测试 2：优先级丢弃策略
  describe('优先级丢弃策略', () => {
    it('队列满时丢弃低优先级数据', () => {
      // 填充队列（优先级0）
      for (let i = 0;i < 10;i++) radar.report({ id: i }, 0);
      // 添加高优先级数据
      radar.report({ id: 10 }, 1);
      // 检查是否丢弃了最低优先级（id=0）
      expect(radar.getQueueStats().mainQueue).toBe(10);
      expect(radar['queue'][0].id).not.toBe(0); // [9](@ref)
    });

    it('不丢弃同优先级数据', () => {
      radar = new RadarReport({ maxQueueSize: 3 });
      radar.report({ id: 1 }, 1);
      radar.report({ id: 2 }, 1);
      radar.report({ id: 3 }, 1); // 队列满
      radar.report({ id: 4 }, 1); // 应丢弃旧数据（id=1）
      expect(radar['queue'].find(item => item.id === 1)).toBeUndefined();
    });
  });

  // 测试 3：发送与重试机制
  describe('发送与重试', () => {
    it('使用 sendBeacon 在页面卸载时发送', async () => {
      radar.report({ event: 'unload' });
      Object.defineProperty(document, 'visibilityState', { value: 'hidden' }); // 模拟页面卸载
      await radar.flush(); // 手动触发发送
      expect(navigator.sendBeacon).toHaveBeenCalled(); // [1](@ref)
    });

    it('失败时指数退避重试', async () => {
      global.fetch = vi.fn(() => Promise.reject('Network error'));
      radar.report({ event: 'error' });
      await radar.flush();
      vi.advanceTimersByTime(4000); // 模拟时间流逝 [7](@ref)
      expect(radar['retryQueue'].length).toBe(1);
      expect(radar['retryAttempts'].size).toBe(1);
    });

    it('超过重试次数后转存离线', async () => {
      global.fetch = vi.fn(() => Promise.reject('Failed'));
      radar.report({ event: 'critical' });
      await radar.flush();
      // 触发两次重试（初始+1次）
      vi.advanceTimersByTime(3000);
      vi.advanceTimersByTime(6000);
      expect(localStorage.setItem).toHaveBeenCalled(); // [9](@ref)
    });
  });

  // 测试 4：离线存储
  describe('离线存储', () => {
    it('离线数据超过上限时清理旧数据', () => {
      const testData = Array.from({ length: 300 }, (_, i) => ({ id: i }));
      radar['storeOfflineData'](testData);
      const storedData = JSON.parse(localStorage.getItem('radar_offline_data')!);
      expect(storedData.length).toBe(200); // 限制为200条
    });

    it('页面卸载时持久化数据', () => {
      radar.report({ event: 'unload' });
      window.dispatchEvent(new Event('unload')); // 触发 unload 事件
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  // 测试 5：边界与错误处理
  describe('边界与错误', () => {
    it('大负载数据降级为 fetch', async () => {
      const largeData = { payload: 'a'.repeat(70000) }; // 超过 64KB
      radar.report(largeData);
      await radar.flush();
      expect(fetch).toHaveBeenCalled(); // 不使用 sendBeacon
    });

    it('网络超时触发重试', async () => {
      global.fetch = vi.fn(() => new Promise(async (_, r) => {
        setTimeout(r, 200, new Error('Timeout'))
        radar.report({ event: 'timeout' });
        await radar.flush();
        expect(radar['retryQueue'].length).toBe(1);
      }))
    });
  });
});