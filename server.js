var express = require("express");
var app = express();
require("dotenv").config();
var port = process.env.PORT || 5500;
module.exports = process.env.NEWS_API_KEY;
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("newszone app is running on port: " + port);
});
