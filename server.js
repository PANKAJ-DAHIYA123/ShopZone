const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const indexRouter = require("./routes/index");

require("dotenv").config();
var port = process.env.PORT || 5500;

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);

app.get("/", indexRouter);
app.get("/Login", indexRouter);
app.get("/Signup", indexRouter);
app.get("/Business", indexRouter);
app.get("/Technology", indexRouter);
app.get("/Entertainment", indexRouter);
app.get("/Sports", indexRouter);
app.get("/Science", indexRouter);
app.get("/Health", indexRouter);
app.get("/Search", indexRouter);
app.listen(port, () => {
  console.log("newszone app is running on port: " + port);
});
