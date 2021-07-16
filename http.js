const http = require("http"); // diff between http & https

const hostname = "127.0.0.1"; // "localhost"
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // what are different http status codes?
  res.setHeader("Content-Type", "text/plain"); // what are possible types of http response Content-Type
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
