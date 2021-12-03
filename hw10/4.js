const http = require("http");
const port = 6000;
const httpServer = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("Hellow Web Application");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.write("About Me");
    res.end();
  } else if (req.url === "/hello" && req.method === "GET") {
    res.write("Hello");
    res.end();
  } else if (req.url === "/web" && req.method === "GET") {
    res.write("Web");
    res.end();
  } else if (req.url === "/app" && req.method === "GET") {
    res.write("Application");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});
httpServer.listen(port);
console.log(`Server running... http://localhost:${port}`);
