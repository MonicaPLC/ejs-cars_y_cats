const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 


app.set('view engine', 'ejs');

app.get("/cars", (req, res) => {
  res.render("cars");
});

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/cars/new", (req, res) => {
  res.render("formulario");
});

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
