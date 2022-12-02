const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }))

router.get(
    '/auth/google/callback',
    passport.authenticate('google',
     { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/login')
    }
  )

  router.get('/auth/failure', (req,res) => {
    res.send('something went wrong..')
  })  

  //!Change: Passport 0.6 requires logout to be async
  router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})
  
  module.exports = router;