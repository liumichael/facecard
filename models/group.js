// app/models/group.js
// load the things we need
var mongoose = require('mongoose');
var User = require('./users.js');
var UserSchema = mongoose.model('User').schema;

// define the schema for our group model
var group = mongoose.Schema({

    id: Number,
    owner: [UserSchema],
    name: String,
    slug: {
      type: String,
      unique: true
    },

});

group.pre('save', function(next) {
  this.slug = slugify(this.title);
  next();
});

// create the model for users and generalize it to our app
const groupModel = mongoose.model('Group', group);

module.exports = groupModel;

// function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
