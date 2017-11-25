var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var deckCuecardSchema = mongoose.Schema({
    deckId: String,
    cardId: String,

});

module.exports = mongoose.model('DeckCuecard', deckCuecardSchema);
