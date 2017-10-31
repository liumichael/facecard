var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();


app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static(path.join(__dirname, '/public')));


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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Facecard is running on port ${ PORT }`);
});
