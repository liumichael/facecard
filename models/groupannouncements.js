// app/models/groupannouncements.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our group announcement model
var groupAnnouncementSchema = mongoose.Schema({

    id 		 : Number,
    groupid      : Number,

});


// create the model for users and generalize it to our app
module.exports = mongoose.model('GroupAnnouncements', groupAnnouncementSchema);
