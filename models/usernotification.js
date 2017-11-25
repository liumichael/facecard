// app/models/usernotification.js

// load the things we need

var mongoose = require('mongoose');



// define the schema for our user model

var usernotificationSchema = mongoose.Schema({

    username    	: String,
    notificationid  : Number,

});



// create the model for users and generalize it to our app

module.exports = mongoose.model('Usernotification', usernotificationSchema);