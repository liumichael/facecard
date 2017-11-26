// app/models/userdeck.js

// load the things we need

var mongoose = require('mongoose');

var UserSchema = mongoose.model('Cuecard').schema;



// define the schema for our user model

var userdeckSchema = mongoose.Schema({

    id: String
    name: String,
    username: String,
    curcards: [cuecardSchema],
    
});



// create the model for users and generalize it to our app

module.exports = mongoose.model('Userdeck', userdeckSchema);
