var express = require('express'),
    app = express(),
    path = require('path'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config/config'),
    fs = require('fs'),
    cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/public')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public/views'));

mongoose.connect(config.database, () => {
    console.log('connected to mongooooo');
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var Article = require('./db/models/articles');


app.get('/articles', (req,res)=>{
    Article.find((err,docs)=>{
        console.log("articles received");
        res.json(docs)
    });
});

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(config.port, ()=>{
    console.log("listening on port " + config.port)
});
