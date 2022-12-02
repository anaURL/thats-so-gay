const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = function (passport) {
passport.use(new GoogleStrategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback   : true
    },
    async (accessToken, refreshToken, profile, done) => {
      //get the user data from google 
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        email: profile.emails[0].value
      }

      try {
        //find the user in our database 
        let user = await User.findOne({ googleId: profile.id })

        if (user) {
          //If user present in our database.
          done(null, user)
        } else {
          // if user is not preset in our database save user data to database.
          user = await User.create(newUser)
          done(null, user)
        }
      } catch (err) {
        console.error(err)
      }
    }
  )
)

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
})

}