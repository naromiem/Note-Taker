const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))
//const noteArray = [];

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});



app.get("/api/notes", function(req, res) {

});

app.post("/api/notes", function(req, res) {
 
});

app.delete("/api/notes/:id", function(req, res) {
  
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

