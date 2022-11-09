const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("");

server.listen(process.env.PORT);

app.use(express.static(__dirname + "/../"));

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});
