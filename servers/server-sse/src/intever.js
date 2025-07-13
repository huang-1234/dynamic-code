
// const interval = setInterval(() => {
//   let [start, end, gap] = [0, 100, 100];
//   if (end > content.length) {
//     end = content.length;
//   }
//   const chunk = content.slice(start, end);
//   start += gap;
//   end += gap;
//   res.write(`data: ${JSON.stringify({
//     time: Date.now(),
//     content: chunk
//   })}\n\n`);
//   if (end > content.length) {
//     clearInterval(interval);
//   }
// }, 1000);

// // 客户端断开时清理资源
// req.on('close', () => clearInterval(interval));