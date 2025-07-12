export class RadarReport<T extends {} = {}> {
    private queue: T[] = [];
    private sending = false;
    private retryQueue: T[] = [];
    private retryAttempts = new Map<string, number>();
    private maxRetries = 3;
    private maxQueueSize = 1000;
    reportUrl: string = '/api/radar';
  
    // 增强型上报方法
    report(data: T) {
      if (this.queue.length >= this.maxQueueSize) {
        console.warn('Report queue full, discarding oldest data');
        this.queue.shift();
      }
      this.queue.push(data);
      if (!this.sending) this.processQueue();
    }
  
    // 健壮的上报处理流程
    private async processQueue() {
      this.sending = true;
  
      // 优先处理重试队列
      while (this.retryQueue.length > 0) {
        const batch = this.retryQueue.splice(0, 5)
        if (batch) {
          await this.sendBatch(batch, true);
        }
      }
  
      // 处理主队列
      while (this.queue.length > 0) {
        const batch = this.queue.splice(0, 5);
        if (batch) {
          await this.sendBatch(batch);
        }
      }
  
      this.sending = false;
    }
  
    // 核心发送逻辑（整合sendReport的健壮性设计）
    private async sendBatch(batch: T[], isRetry = false) {
      const batchId = Date.now() + '-' + Math.random()?.toString(36)?.substr?.(2, 5);
  
      try {
        const reportUrl = this.reportUrl || '/api/radar';
        if (navigator.sendBeacon && reportUrl) {
          const blob = new Blob([JSON.stringify(batch)], { type: 'application/json' });
          const success = navigator.sendBeacon(reportUrl, blob);
  
          if (!success) throw new Error('Beacon failed');
        } else {
          await fetch(reportUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(batch),
            keepalive: true,
          });
        }
  
        // 清理重试记录
        if (isRetry) this.retryAttempts.delete(batchId);
      } catch (e) {
        this.handleSendError(batch, batchId, e as Error);
      }
    }
  
    // 增强的错误处理机制
    private handleSendError(batch: T[], batchId: string, error: Error) {
      const attempts = this.retryAttempts.get(batchId) || 0;
  
      if (attempts < this.maxRetries) {
        console.warn(`Send failed, retrying (${attempts + 1}/${this.maxRetries}): ${error.message}`);
        this.retryAttempts.set(batchId, attempts + 1);
        this.retryQueue.push(...batch);
      } else {
        console.error(`Permanent send failure: ${error.message}`, batch);
        // 可添加降级策略（如本地存储）
      }
    }
  
    // 新增监控指标
    getQueueStats() {
      return {
        mainQueue: this.queue.length,
        retryQueue: this.retryQueue.length,
        activeSending: this.sending,
      };
    }
  }
  