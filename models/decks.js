var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var deckSchema = mongoose.Schema({
    id: String,
    name: String,
});

module.exports = mongoose.model('Deck', deckSchema);
