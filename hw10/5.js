const http = require("http");
const fs = require("fs");
const port = 3000;
const httpServer = http.createServer((req, res) => {
  var html = fs.readFileSync("./5.html", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});
httpServer.listen(port);
console.log(`Server running... http://localhost:${port}`);
