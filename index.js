import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("index.ejs")
})

app.get("/about", (req, res) =>{
    res.render("about.ejs")
})

app.get("/gallery", (req, res) =>{
    res.render("gallery.ejs")
})

app.get("/booking", (req, res) =>{
    res.render("book.ejs")
})

app.get("/brunch", (req, res) =>{
    res.render("brunch.ejs")
})

app.get("/dinner", (req, res) =>{
    res.render("dinner.ejs")
})

app.get("/420", (req, res) =>{
    res.render("420.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });