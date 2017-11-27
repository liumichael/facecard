const mainController = require('../controllers/main.controller.js')

// export router
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    if(req.user) {
      res.redirect('/user');
    } else {
      res.redirect('/login');
    }
  });

  app.get('/login', function(req, res) {
    res.render('login');
  })

  app.get('/signup', function(req, res) {
    res.render('signup');
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

  app.get('/user', mainController.getUserPage);

  app.get('/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/login');
    });
  });

  // app.post('/user/post', mainController.seedDeck);
  // app.get('/deck/post', mainController.seedUserDeck);

  app.get('/group/:name', mainController.getGroupPage);
  app.post('/group/newdeck', mainController.addNewGroupCard);
  app.post('/group/verify/:deckid',  mainController.verifyCard);
  app.post('/user/share', mainController.shareDeck);

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

  app.get('/deck/:id', mainController.getUserDeck);

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
