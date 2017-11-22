var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/new", (req, res) => {
    res.render("new");
})

app.liste(3000, () => {
    console.log("Listening on port 3000").
})