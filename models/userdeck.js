// app/models/userdeck.js

// load the things we need

var mongoose = require('mongoose');
var cueCard = require('./cuecard.js');
var CuecardSchema = mongoose.model('Cuecard').schema;



// define the schema for our user model

var userdeckSchema = mongoose.Schema({

    id: Number,
    name: String,
    username: String,
    cuecards: [CuecardSchema],

});



// create the model for users and generalize it to our app

module.exports = mongoose.model('Userdeck', userdeckSchema);
