const mainController = require('../controllers/main.controller.js')

// export router
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    if(req.user) {
      res.render('user', {user:req.user.local.username});
    } else {
      res.render('login');
    }
  });

  app.get('/tryagain', function(req, res) {
    res.render('tryagain');
  })

  app.get('/login', function(req, res) {
    res.render('login');
  })

  app.get('/signup', function(req, res) {
    res.render('signup');
  })

  app.get('/group', function(req, res) {
    res.render('group', {title : "BIO100", user: req.user.local.username});
  })

  app.get('/quiz', function(req, res) {
    res.render('quiz', {user: req.user.local.username});
  })

  app.get('/about', function(req, res) {
    res.render('about');
  })

  app.get('/contact', function(req, res) {
    res.render('contact');
  })

  app.get('/user', function(req, res) {
    res.render('user', {user: req.user.local.username});
  })

  app.get('/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/login');
    });
  });

  // app.post('/user/post', mainController.postDeck);
  app.get('/group/:name', mainController.getGroupPage);

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/user', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
      res.render('index.ejs', {
        message: req.flash('signupMessage'),
        loggedIn: req.user,
        user: req.user,
        status: 'signup',

      });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/user', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  app.get('/cue', function(req, res){
      res.render('cue_card_front', {user: req.user.local.username});
  });

};



function loggedIn(req, res, next) {
    if (req.user) {
        next();
        return true;
    } else {
        res.redirect('/login');
        return false;
    }
}

function authorized(req, res, next) {
    Post.findOne({slug: req.params.slug}, (err, post) => {
      if (err) {
        res.status(404);
        res.send('Posts not found!');
      }
      if(!req.user){
        res.redirect('/login');
        return false;
      }else {

        if (req.user.local.username) {
            var user = req.user.local.username;
        } else if (req.user.facebook.name){
            var user = req.user.facebook.name;
        }
        console.log(user);
        if(post){
          console.log(post.author);
          if(user == post.author){
              next();
              //res.redirect('/');
              return true;
          }else {
              res.redirect('/');
              req.flash('You are not authorized');
              return false;
          }
        }
        return false;

      }
    });
}
