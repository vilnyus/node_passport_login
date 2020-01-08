
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth.js');

// Welcome Page
router.get('/', (req, res)=> res.render('welcome'));

/*
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'));

module.exports = router;
*/


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;