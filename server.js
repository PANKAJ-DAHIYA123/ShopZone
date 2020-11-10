var express = require("express");
var axios = require("axios");
const { response } = require("express");
var app = express();
require("dotenv").config();
var port = process.env.PORT || 5500;
var key = process.env.NEWS_API_KEY;
async function getNews(key) {
  return news;
}

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  var url =
    "http://newsapi.org/v2/top-headlines?" + "country=us&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log("newszone app is running on port: " + port);
});
