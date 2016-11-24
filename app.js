var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://hackathonuser:24november2016@ds163417.mlab.com:63417/hackathonq4audionotes')
var app = express();
var AudioNoteModel = require('./models/audioNote.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});