/**
 * user model
 */
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  avatarUrl: String,
  email: String,
  password: String,
  role: { type: String, default: 'user' }, // ['admin', 'moderator', 'user']
  github: {
    id: Number,
    url: String,
    company: String,
    location: String,
    bio: String,
    hireable: Boolean,
    followers: Number,
    following: Number,
  },
})

userSchema.pre('save', function (next) {
  var user = this

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)

      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('user', userSchema)
