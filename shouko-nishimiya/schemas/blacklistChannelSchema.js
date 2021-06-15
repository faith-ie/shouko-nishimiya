const mongoose = require('mongoose')
const blacklistChannelSchema = mongoose.Schema({
  channelID: String,
  blacklistDate: Date,
  reason: String
})
module.exports = mongoose.model('channelblacklist', blacklistChannelSchema)
