var Group = require('../models/group');
var User = require('../models/users');
var GroupDeck = require ('../models/groupdeck');

module.exports = {
	postDeck : postDeck,
  getGroupPage : getGroupPage
}


function postDeck(req, res) {
	const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/group');
  }

  var owner = new User({local : {username : "sushi", password : "hello", email : "hello@gmail.com"}});
	var item = new Group({id : 7, owner : owner, name : "BIO105"});
	item.save();
}

function getGroupPage(req, res) {
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/user');
  }

  Group.findOne({name : req.params.name})
  .then(function (data) {
    if (!data) {
      res.send("nothing in the database");
    }
    else {

      res.render('group', {
        _id : data._id,
        title : data.name
      });
    }
  });
}
