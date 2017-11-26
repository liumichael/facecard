var Group = require('../models/group');
var User = require('../models/users');
var UserDeck = require('../models/userdeck');
var GroupDeck = require ('../models/groupdeck');

module.exports = {
	seedDeck : seedDeck,
	seedUserDeck: seedUserDeck,
  getGroupPage : getGroupPage,
	getUserPage : getUserPage,
}


function seedDeck(req, res) {
	const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/group');
  }

	console.log(req.user);
  var owner = req.user;
	var member = req.user;
	var members = [member];
	var item = new Group({id : 8, owner : owner, members: members, name : "MAT137"});
	console.log(item.members);
	console.log(item.owner);
	item.save();
	res.redirect('/group');

}

function seedUserDeck(req, res) {
	const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/user');
  }

	cuecards = []
	var item1 = new UserDeck({id : 1, name : "BIO100 test 1", user: req.user, cuecards : cuecards});
	var item2 = new UserDeck({id : 2, name : "MAT137 test 1", user: req.user, cuecards : cuecards});
	var item3 = new UserDeck({id : 3, name : "CSC369 test 1", user: req.user, cuecards : cuecards});
	var item4 = new UserDeck({id : 4, name : "CSC258 test 1", user: req.user, cuecards : cuecards});

	item1.save();
	item2.save();
	item3.save();
	item4.save();
	res.redirect('/user');
}

function getGroupPage(req, res) {
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/user');
  }

	Group.find({})
	.then(function (data) {
		console.log(data);
	});
  Group.findOne({name : req.params.name})
  .then(function (data) {
    if (!data) {
      res.send("nothing in the database");
    }
    else {
			GroupDeck.find({groupid : data.id})
			.then(function(data2) {
				res.render('group', {
	        _id : data._id,
					id : data.id,
	        title : data.name,
					user: req.user.local.username,
					members: data.members,
					decks : data2
	      });
			});
    }
  });
}

function getUserPage(req, res) {
	const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    res.redirect('/user');
  }

	Group.find({ members: { $elemMatch: { "local.username": req.user.local.username } } }, (err1, groups) => {
		if (err1) {
			res.status(404);
			res.send('Groups not found!');
		}

		UserDeck.find({ "user.local.username": req.user.local.username }, (err2, userdecks) => {
			if (err2) {
				res.status(404);
				res.send('UserDecks not found!');
			}

			res.render('user', {
				user: req.user.local.username,
				groups: groups,
				userdecks: userdecks,
			});
		});
	});
}
