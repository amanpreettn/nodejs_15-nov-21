var http = require("http");
var fs = require("fs");

var myfile = fs.readFileSync("index.html");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(myfile);
  res.end();
});

server.listen(3000, function () {
  console.log("Server has started on port 3000");
});
