// app/models/announcements.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var announcementSchema = mongoose.Schema({

    id 		 : String,
    title        : String,
    content      : String,
    username     : String,
    date         : Date,

});


// create the model for users and generalize it to our app
module.exports = mongoose.model('Announcements', announcementSchema);
