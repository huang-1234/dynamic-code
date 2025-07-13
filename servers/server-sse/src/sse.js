const express = require('express');
const app = express();
const { content } = require('./article');

app.get('/sse-stream', (req, res) => {
  // 设置SSE响应头，添加charset=utf-8确保中文正确显示
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  /**
   * @desc 通过SSE发送数据 content.slice(start, end)、并不断递增
   * @param {number} start 开始位置
   * @param {number} end 结束位置
   * @param {number} gap 间隔
   */
  let [start, end, gap] = [0, 100, 100];

  // 每隔1秒发送一次数据
  const timer = setInterval(() => {
    // 如果开始位置已经超过内容长度，说明发送完毕
    if (start >= content.length) {
      clearInterval(timer);
      res.write('event: close\ndata: 传输完成\n\n');
      res.end();
      return;
    }

    // 确保end不会超过content长度
    const currentEnd = Math.min(end, content.length);

    // 获取当前片段并进行 UTF-8 编码
    const chunk = content.slice(start, currentEnd);

    // 发送数据，确保使用 UTF-8 编码
    res.write(`data: ${chunk}\n\n`, 'utf8');

    // 更新start和end位置
    start = end;
    end = start + gap;
  }, 100);

  // 客户端断开连接时清理定时器
  req.on('close', () => {
    clearInterval(timer);
  });
});

app.listen(3000, () => console.log(`Server running on: http://localhost:${3000}/sse-stream`));