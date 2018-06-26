/**
 * module dependencies for passport configuration
 */
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const LocalStrategy = require('passport-local').Strategy

const GITHUB_CLIENT_ID = require('../config/credentials').GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = require('../config/credentials')
  .GITHUB_CLIENT_SECRET
const GITHUB_CALLBACK_URL = require('../config/credentials').GITHUB_CALLBACK_URL

const {
  getUser,
  signInViaLocal,
  signInViaGithub,
} = require('./entities/user/controller')

/**
 * passport configuration
 */
const passportConfig = app => {
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    getUser(id).then(
      user => {
        done(null, user)
      },
      error => {
        done(error)
      }
    )
  })

  // Local strategy using username and password
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await signInViaLocal(username, password)
        done(null, user)
      } catch (err) {
        done(err)
      }
    })
  )

  // github strategy for passport using OAuth
  passport.use(
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: GITHUB_CALLBACK_URL,
        scope: 'user:email',
      },
      (accessToken, refreshToken, gitProfile, done) => {
        signInViaGithub(gitProfile).then(
          user => {
            console.log('got the user')
            done(null, user)
          },
          error => {
            console.log('something error occurs')
            done(error)
          }
        )
      }
    )
  )
}

module.exports = passportConfig
