// app/models/member.js

// load the things we need

var mongoose = require('mongoose');



// define the schema for our user model

var memberSchema = mongoose.Schema({

    username    : Number,
    groupid     : String,

});



// create the model for users and generalize it to our app

module.exports = mongoose.model('Member', memberSchema);