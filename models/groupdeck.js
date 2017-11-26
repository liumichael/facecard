// app/models/groupdeck.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our group deck model
var groupDeckSchema = mongoose.Schema({

    id 		       : Number,
    groupid      : Number,

});


// create the model for users and generalize it to our app
module.exports = mongoose.model('GroupDeck', groupDeckSchema);
