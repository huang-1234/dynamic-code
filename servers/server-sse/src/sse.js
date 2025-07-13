const express = require('express');
const app = express();

app.get('/sse-stream', (req, res) => {
  // 设置SSE响应头
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  // 每秒发送数据
  const interval = setInterval(() => {
    res.write(`data: ${JSON.stringify({ time: Date.now() })}\n\n`);
  }, 1000);

  // 客户端断开时清理资源
  req.on('close', () => clearInterval(interval));
});

app.listen(3000, () => console.log(`Server running on: http://localhost:${3000}/sse-stream`));