// app/models/userdeck.js

// load the things we need

var mongoose = require('mongoose');



// define the schema for our user model

var userdeckSchema = mongoose.Schema({

    username    : String,
    deckid     : Number,

});



// create the model for users and generalize it to our app

module.exports = mongoose.model('Userdeck', userdeckSchema);