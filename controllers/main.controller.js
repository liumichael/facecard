var Group = require('../models/group');
var User = require('../models/users');
var GroupDeck = require ('../models/groupdeck');

module.exports = {
	postDeck : postDeck,
  getGroupPage : getGroupPage,
	getUserPage : getUserPage,
}


function postDeck(req, res) {
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

	Group.find({ members: { $elemMatch: { "local.username": req.user.local.username } } }, (err, group) => {
		if (err) {
			res.status(404);
			res.send('Posts not found!');
		}

		res.render('user', {
			user: req.user.local.username,
			groups: group
		});
	});
}
