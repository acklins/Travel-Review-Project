require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require("connect-flash")
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const db = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true 
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user
  next()
})

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/dashboard', isLoggedIn, (req, res) => {
  db.destination.findAll()
    .then((destinations) => {
      const destArr = []
      destinations.forEach((destination) => {
        const destData = {
          destinationName: destination.city,
          destinationId: destination.id
        }
        destArr.push(destData)
      })
      res.render('dashboard.ejs', {destData: destArr});
    })
});

app.use('/auth', require('./routes/auth'));
app.use('/destinations', require('./routes/destinations'))

var server = app.listen(process.env.PORT || 3000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 3000}🎧`));

module.exports = server;
