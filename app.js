const express = require("express");
const ejs = require('ejs');


const app = express();
app.set("view engine",'ejs');
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render("index");
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