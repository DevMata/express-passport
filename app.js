const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
require('./config/passport-setup');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('App is now listening on port 3000');
});
