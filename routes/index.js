const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
var key = process.env.NEWS_API_KEY;

router.get("/", (req, res) => {
  var url =
    "http://newsapi.org/v2/top-headlines?" + "country=in&" + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/Search", (req, res) => {
  var url =
    "http://newsapi.org/v2/everything?" +
    `q=${req.query.topic}&` +
    `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("*", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=health&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
