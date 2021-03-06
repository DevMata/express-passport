const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.send('Logging out');
});

router.get('/google', (req, res) => {
  res.send('Logging in');
});

module.exports = router;
