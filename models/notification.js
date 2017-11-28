// app/models/notification.js
// load the things we need
var mongoose = require('mongoose');
var User = require('./users.js');
var UserSchema = mongoose.model('User').schema;

// define the schema for our group model
var notification = mongoose.Schema({

    id: Number,
    sender: UserSchema,
    title: String,
    content: String,
    receiver : UserSchema
});

// create the model for notification and generalize it to our app
const notificationModel = mongoose.model('Notification', notification);

module.exports = notificationModel;
