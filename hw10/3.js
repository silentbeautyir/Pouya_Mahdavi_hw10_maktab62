const http = require("http");
const port = 5000;

const httpServer = http.createServer((req, res) => {
  console.log(req.url);
  res.end();
});

httpServer.listen(port);
console.log(`server running... http://localhost:${port}}`);
