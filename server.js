var express = require("express");
var axios = require("axios");
const { response } = require("express");
var app = express();
require("dotenv").config();
var port = process.env.PORT || 5500;
function getNews(key) {
  var url =
    "http://newsapi.org/v2/top-headlines?" + "country=us&" + `apiKey=${key}`;
  axios({ url })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
}
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", {
    key: process.env.NEWS_API_KEY,
    getNews: getNews,
  });
});

app.listen(port, () => {
  console.log("newszone app is running on port: " + port);
});
