const mongoose = require('mongoose')
const blacklistUserSchema = mongoose.Schema({
  userID: String,
  blacklistDate: Date,
  reason: String
})
module.exports = mongoose.model('userblacklist', blacklistUserSchema)
