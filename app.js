var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/blog_db');

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    created: {type: Date, default: Date.now},
    body: String
});

let Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: 'My Title',
//     image: 'https://puu.sh/y3lN1/da6f0dc51e.png',
//     body: 'this is my body from my post'
// });

app.get("/", (req, res) => {
    res.redirect("/blogs");
})

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("index", {blogs:blogs})
        }
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})