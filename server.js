// Initialize Express FrameWork
var express = require('express');
var app = express();

// Initialize module for resolving paths
var path = require('path');

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var methodOverride = require('method-override');
app.use(methodOverride());

// Login Stuff

app.use(require("express-session")({
    secret: "this is a string of text",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Dynamically get a port to use
var port = process.env.PORT;

// Set view engine as well as path to views
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')))

// First Route
app.get('/', function(req, res){
    res.render('index');
})

// Login Routes
app.get("/login", function(req, res) {
    res.render("login");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {

});

app.get("logout", function(req, res){
    req.logout();
    res.redirect("/");
});

// Router

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);


// Listen for incoming requests
app.listen(port, function(){
    console.log('SERVER RUNNING... PORT: ' + port);
})