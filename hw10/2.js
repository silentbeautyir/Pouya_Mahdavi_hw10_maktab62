const http = require("http");
const fs = require("fs");
const port = 5000;
const httpServer = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "get") {
    var obj = fs.readFileSync("./json.json", "utf-8");
    res.write(obj);
    res.end();
  }
});
httpServer.listen(port);
console.log(`Server running... http://localhost:${port}`);
