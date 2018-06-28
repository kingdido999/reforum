const passport = require('passport')
const signIn = require('./controller').signIn
const getFullProfile = require('./controller').getFullProfile
const User = require('./model')

/**
 * user apis
 */
const userAPI = app => {
  // get authenticated user
  app.get('/api/user/getUser', (req, res) => {
    if (req.user) res.send(req.user)
    else res.send({})
  })

  // github authentication route
  app.get('/api/user/authViaGitHub', passport.authenticate('github'))

  // callback route from github
  app.get(
    // this should match callback url of github app
    '/api/user/authViaGitHub/callback',
    passport.authenticate('github', { failureRedirect: '/signIn/failed' }),
    (req, res) => {
      res.redirect('/')
    }
  )

  // signout the user
  app.get('/api/user/signout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  // get user full profile
  app.get('/api/user/profile/:username', (req, res) => {
    getFullProfile(req.params.username).then(
      result => {
        res.send(result)
      },
      error => {
        res.send({ error })
      }
    )
  })

  // Login with username and password
  app.post('/api/user/login', (req, res, next) => {
    const { username, password } = req.body
    let errors = []

    if (username.trim() === '') {
      errors.push('用户名不能为空。')
    }

    if (password.trim() === '') {
      errors.push('密码不能为空。')
    }

    if (errors.length > 0) {
      res.status(400).send(errors)
      return next()
    }

    passport.authenticate('local')(req, res, function (err) {
      if (err) {
        res.status(400).send(err)
      } else {
        res.send('Authenticated.')
      }
    })
  })

  // Sign up with username and password
  app.post('/api/user/signup', async (req, res, next) => {
    const { username, email, password } = req.body

    let user = await User.findOne({
      $or: [{ email }, { username }],
    }).exec()

    if (user) {
      res.status(400).send('用户名或邮箱已被注册。')
    } else {
      user = new User({ username, email, password })

      try {
        await user.save()

        passport.authenticate('local')(req, res, function (err) {
          if (err) {
            res.status(400).send(err)
          } else {
            res.send('Authenticated.')
          }
        })
      } catch (err) {
        const { errors } = err
        if (errors) {
          const errorMsgs = Object.keys(errors).map(key => errors[key].message)
          res.status(400).send(errorMsgs)
        } else {
          res.status(500).send(err)
        }
      }
    }
  })
}

module.exports = userAPI
