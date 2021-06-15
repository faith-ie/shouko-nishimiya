const mongoose = require('mongoose')
const blacklistServerSchema = mongoose.Schema({
  serverID: String,
  blacklistDate: Date,
  reason: String
})
module.exports = mongoose.model('ServerBlacklist', blacklistServerSchema)
