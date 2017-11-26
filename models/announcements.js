// app/models/announcements.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our announcement model
var announcementSchema = mongoose.Schema({

    id 		 : Number,
    groupid      : Number,
    title        : String,
    content      : String,
    username     : String,
    date         : Date,

});


// create the model for users and generalize it to our app
module.exports = mongoose.model('Announcements', announcementSchema);
