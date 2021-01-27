const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const indexRouter = require("./routes/index");

require("dotenv").config();
var port = process.env.PORT || 5500;

app.use(express.urlencoded());
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));

app.get("/", indexRouter);
app.get("/login", indexRouter);
app.get("/signup", indexRouter);
app.post("/signup", indexRouter);
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
