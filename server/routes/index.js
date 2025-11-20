var express = require('express');
var router = express.Router();
const passport = require('passport');
let DB = require('../config/db');

// This matches routes/users.js
const userRoutes = require('./users');

// Attach user routes at /users
router.use('/users', userRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

router.post('/contact', (req, res) => {
    console.log(req.body);

    res.render('contact', { 
        title: 'Contact us',
        message: 'Your message has been sent!'
    });
});


module.exports = router;