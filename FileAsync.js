var fs= require("fs")

fs.readFile("index.html", "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  console.log("Hello World");
