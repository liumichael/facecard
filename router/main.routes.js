// export router
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    if(req.user && req.user.displayName) {
      res.render('user', {user:req.user.displayName});
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
    res.render('group');
  })

  app.get('/quiz', function(req, res) {
    res.render('quiz');
  })

  app.get('/about', function(req, res) {
    res.render('about');
  })

  app.get('/contact', function(req, res) {
    res.render('contact');
  })

  app.get('/user', function(req, res) {
    res.render('user');
  })

  app.get('/auth/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/login');
    });
  });


  app.post('/login', function(req, res) {

  });


  app.post('/register', function(req, res){

  });

  app.get('/cue', function(req, res){
      res.render('cue_card_front');
  });

};
