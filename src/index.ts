import http from "http";

http
  .createServer((req, res) => {
    console.log('incoming request...')
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ "message": "hello" }));
  })
  .listen(8081, () => console.log("listening at 8081"));
