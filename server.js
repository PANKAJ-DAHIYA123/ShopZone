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
  var url = "http://newsapi.org/v2/top-headlines?" + "country=in&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Business", (req, res) => {
  var url =
    "http://newsapi.org/v2/everything?" + "q=Business&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Technology", (req, res) => {
  var url =
    "http://newsapi.org/v2/everything?" + "q=Technology&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Entertainment", (req, res) => {
  var url =
    "http://newsapi.org/v2/everything?" + "q=Entertainment&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Sports", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + "q=Sports&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Science", (req, res) => {
  var url =
    "http://newsapi.org/v2/everything?" + "q=Science&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("index", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/Health", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + "q=Health&" + `apiKey=${key}`;
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
