// app/models/groupdeck.js
// load the things we need
var mongoose = require('mongoose');
var cueCard = require('./cuecard.js');
var CueCardSchema = mongoose.model('Cuecard').schema;

// define the schema for our group deck model
var groupDeckSchema = mongoose.Schema({

    id 		       : Number,
    groupid      : Number,
    name         : String,
    cuecards     : [CueCardSchema]
});


// create the model for users and generalize it to our app
module.exports = mongoose.model('GroupDeck', groupDeckSchema);
