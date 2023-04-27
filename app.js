require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Db } = require("mongodb");
const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGO_DB_URL);

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const articleSchema = new mongoose.Schema({
  articleName: String,
  articleImg: String,
  articleHeading: String,
  articleLink: String,
  newsContentEnd: String,
  newsLinkHeading: String,
});

const Article = mongoose.model("articles", articleSchema);

// const article0 = new Article({
//   articleName : "PAK VS ENG, FINAL",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c248300/stokes-curran-lead-england-to.jpg",
//   articleHeading: "Stokes, Curran lead England to T20 World Cup glory",
//   articleLink : "/article",
//   newsContentEnd : "Earlier, Adil Rashid and Chris Jordan bagged a brace each",
//   newsLinkHeading: "Stokes stars in title triumph"
// });
// const article1 = new Article({
//   articleName : "INDIA WOMEN TOUR OF ENGLAND",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243195/harmanpreet-kaurs-143-powers.jpg",
//   articleHeading: "Harmanpreet Kaur's 143 powers India to memorable series win",
//   articleLink : "/article",
//   newsContentEnd : "Led by Harmanpreet's fifth ODI century, India women thumped England by 88 runs to secure their maiden limited overs series in the country in 23 years",
//   newsLinkHeading: "Lord's game will be very emotional for us: Harmanpreet on Jhulan Goswami's retirement"
// });
// const article2 = new Article({
//   articleName : "MUST READ",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c248177/mohammad-haris-a-mirror-to-p.jpg",
//   articleHeading: "Mohammad Haris - A mirror to Pakistan's heartbeat",
//   articleLink : "/article",
//   newsContentEnd : "Pakistan's fortunes in the T20 World Cup have turned on the introduction of a young batter, which is not surprising when you learn what drives 21-year-old Mohammad Haris",
//   newLinkHeading : ""
// });
// const article3 = new Article({
//   articleName : "WTC INTERNATIONAL 2023",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243207/commercial-reasons-behind-why.jpg",
//   articleHeading: "Commercial reasons behind why Lord's won't be hosting 2023 WTC final",
//   articleLink : "/article",
//   newsContentEnd : "The Oval will be the venue for the marquee clash, with Lord's only able to stage the event in 2025",
//   newsLinkHeading: "Men's Ashes 2023 to begin on June 16 at Edgbaston"
// });
// const article4 = new Article({
//   articleName : "SOUTH AFRICA TOUR OF INDIA, 2022",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243190/kca-dispels-fear-over-threat-t.jpg",
//   articleHeading: "KCA dispels fear over threat to India-SA T20I in Thiruvananthapuram",
//   articleLink : "/article",
//   newsContentEnd : "Doubts over the T20I surfaced following Kerala State Electricity Board's decision to pull the plug on the power supply to the Greenfield Stadium",
//   newsLinkHeading: ""
// });
// const article5 = new Article({
//   articleName : "WTC INTERNATIONAL 2023",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243207/commercial-reasons-behind-why.jpg",
//   articleHeading: "Commercial reasons behind why Lord's won't be hosting 2023 WTC final",
//   articleLink : "/article",
//   newsContentEnd : "The Oval will be the venue for the marquee clash, with Lord's only able to stage the event in 2025",
//   newsLinkHeading: "Men's Ashes 2023 to begin on June 16 at Edgbaston"
// });
// const article6 = new Article({
//   articleName : "TOUR POSTPONED",
//   articleImg : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c243207/commercial-reasons-behind-why.jpg",
//   articleHeading: "Commercial reasons behind why Lord's won't be hosting 2023 WTC final",
//   articleLink : "/article",
//   newsContentEnd : "The Oval will be the venue for the marquee clash, with Lord's only able to stage the event in 2025",
//   newsLinkHeading: "Men's Ashes 2023 to begin on June 16 at Edgbaston"
// });

// Article.insertMany([article0,article1,article2,article3,article4,article5,article6]);

app.get("/", function (req, res) {
  Article.find(function (err, foundArticles) {
    res.render("index", { articlesAll: foundArticles });
  });
});
app.get("/live-score", function (req, res) {
  res.render("live_score");
});
app.get("/article", function (req, res) {
  res.render("article");
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
