const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const { owners } = require('../../config.json')
const blacklistServerSchema = require('../../schemas/blacklistServerSchema')
module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) return
  const finds = await blacklistServerSchema.findOne({ serverlID: args[0] })
  if (finds) {
    const embed1 = new MessageEmbed()
    embed1.setDescription(`Server ${args[0]} already exists in the database.`)
    embed1.setColor('#03d7fc')
    message.channel.send(embed1)
  } else {
    const newSBlacklist = new blacklistServerSchema({
      id: mongoose.Types.ObjectId,
      serverID: args[0],
      blacklistDate: new Date(),
      reason: args.slice(1).join(' ')
    })
    try {
      newSBlacklist.save()
    } catch (er) {
      const eEmbed = new MessageEmbed()
      eEmbed.setColor('#03d7fc')
      eEmbed.setDescription(er.toString())
      message.channel.send(eEmbed)
    }
    const embed2 = new MessageEmbed()
    embed2.setDescription(`Server ${args[0]} has been blacklisted.`)
    embed2.setColor('#03d7fc')
    message.channel.send(embed2)
  }
}
module.exports.info = {
  name: 'serverblacklist',
  aliases: ['sbl', 'blacklistserver']
}
