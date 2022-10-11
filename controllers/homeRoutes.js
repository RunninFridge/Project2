const router = require('express').Router();
const auth = require('../utils/auth');
const { User, Survey } = require('../models')

router.get('/', async (req, res) => {
  try {
    if(req.session.logged_in) {
      res.redirect('/api/surveys/dashboard');
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/api/surveys/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;