const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.send('Logging out');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get('/google/redirect', (req, res) => {
  res.send('You reached cb uri');
});

module.exports = router;
