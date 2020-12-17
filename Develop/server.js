const express = require("express");
const path = require("path");
const fs = require("fs");

const noteArray = require("./db/db.json");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});



app.get("/api/notes", function(req, res) {
  res.json(noteArray);
  console.log(noteArray)

});

app.post("/api/notes", function(req, res) {
  const newNote = req.body;
  newNote ["id"] =
  noteArray.length;
  console.log(newNote)

  noteArray.push(newNote);
  res.json(true);
 
});

app.delete("/api/notes/:id", function(req, res) {
  //res.send("testing");
  //console.log(res)
  
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

