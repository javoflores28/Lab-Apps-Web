var express = require('express');
var router = express.Router();
const passport = require('passport');
let Usuario = require('../models/usuario')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('index', { title: 'Express' });
  } else [
    res.redirect('/login')
  ]
  
});

router.get('/login', function(req, res, next) {
  res.render('usuarios/login');
});

router.get('/logout', function(req, res, next){
  req.logOut()
  res.redirect('/login');
});

router.get('/newuser', function(req, res, next) {
  res.render('usuarios/newuser');
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, usuario, info){
    if(err) return next(err)
    if(!usuario) return res.render('usuarios/login', {info})
    if(usuario.verificado == false) return res.render('usuarios/login', {information: 'Usuario no verificado'})
    req.logIn(usuario, function(err){
      if(err) return next(err)
      return res.redirect('/')
    })
  })(req, res, next)
});

module.exports = router;
