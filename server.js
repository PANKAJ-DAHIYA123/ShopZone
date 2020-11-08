var express = require("express");
var axios = require("axios");
const { response } = require("express");
var app = express();
require("dotenv").config();
var port = process.env.PORT || 5500;

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

function getNews() {
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=46b1aea1d63e44e1a1eaf325874f39c5";
  axios({ url })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
}

app.get("/", (req, res) => {
  // const news = await getNews();
  const news = ["Hello", "World"];
  res.render("index", { news: news });
});

app.listen(port, () => {
  console.log("newszone app is running on port: " + port);
});
