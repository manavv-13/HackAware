const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const path = require('path');
const ejsMate = require('ejs-mate');
const scenarioRoute = require("./routes/scenario.js");

app.use(session({
    secret: 'yourSecretKey', // Replace with a strong secret key in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true if you're using HTTPS
}));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().then(()=>{
    console.log("connection done!");
}).catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dataBreachSimulation');
}

app.get("/",(req,res)=>{
    res.render('simulations/home');
}) 
app.get("/about",(req,res)=>{
    res.render("simulations/about");
})
app.use('/simulations', scenarioRoute);
app.listen(8080,()=>{
    console.log("app is listening on port 8080");
})