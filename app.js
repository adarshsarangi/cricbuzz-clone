const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cricbuzzDB");


const app = express();
app.set("view engine",'ejs');
app.use(express.static("public"));

const articleSchema = new mongoose.Schema({
  articleName : String,
  articleImg : String,
  articleHeading: String,
  articleLink : String,
  newsContentEnd : String,
  newsLinkHeading: String
});

const Article = mongoose.model("articles",articleSchema);

const article1 = new Article({
  articleName : "INDIA WOMEN TOUR OF ENGLAND",
  articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243195/harmanpreet-kaurs-143-powers.jpg",
  articleHeading: "Harmanpreet Kaur's 143 powers India to memorable series win",
  articleLink : "/article",
  newsContentEnd : "Led by Harmanpreet's fifth ODI century, India women thumped England by 88 runs to secure their maiden limited overs series in the country in 23 years",
  newsLinkHeading: "Lord's game will be very emotional for us: Harmanpreet on Jhulan Goswami's retirement"
});
const article2 = new Article({
  articleName : "MUST READ",
  articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c248177/mohammad-haris-a-mirror-to-p.jpg",
  articleHeading: "Mohammad Haris - A mirror to Pakistan's heartbeat",
  articleLink : "/article",
  newsContentEnd : "Pakistan's fortunes in the T20 World Cup have turned on the introduction of a young batter, which is not surprising when you learn what drives 21-year-old Mohammad Haris",
  newLinkHeading : ""
});
const article3 = new Article({
  articleName : "WTC INTERNATIONAL 2023",
  articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243207/commercial-reasons-behind-why.jpg",
  articleHeading: "Commercial reasons behind why Lord's won't be hosting 2023 WTC final",
  articleLink : "/article",
  newsContentEnd : "The Oval will be the venue for the marquee clash, with Lord's only able to stage the event in 2025",
  newsLinkHeading: "Men's Ashes 2023 to begin on June 16 at Edgbaston"
});




app.get("/",function(req,res){
  Article.find(function(err,foundArticles){
    res.render("index",{articlesAll:foundArticles});
  });
});
app.get("/live-score",function(req,res){
  res.render("live_score");
});
app.get("/article",function(req,res){
  res.render("article");
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
})
