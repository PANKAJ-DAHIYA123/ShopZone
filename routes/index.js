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


var UserModel = require('../models/db');

router.post('/signup', (req, res) => {
    var newUser = new UserModel({UserId:101, 
      FirstName: req.body.firstname, LastName:req.body.lastname,EmailId:req.body.email ,Password:req.body.Password});

    newUser.save((err, data)=> {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get("Business", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=Business&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("Technology", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=technology&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("Entertainment", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=entertainment&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("Sports", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=sports&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("Science", (req, res) => {
  var url = "http://newsapi.org/v2/everything?" + `q=science&` + `apiKey=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.render("home", { news: response.data.articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("Health", (req, res) => {
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
router.get("*", (req, res) => {
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
module.exports = router;
