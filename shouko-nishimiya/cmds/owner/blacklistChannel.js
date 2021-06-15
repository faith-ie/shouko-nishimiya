const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const { owners } = require('../../config.json')
const blacklistChannelSchema = require('../../schemas/blacklistChannelSchema')
module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) return
  const findc = await blacklistChannelSchema.findOne({ channelID: args[0] })
  if (findc) {
    const embed1 = new MessageEmbed()
    embed1.setDescription(`Channel ${args[0]} already exists in the database.`)
    embed1.setColor('#03d7fc')
    message.channel.send(embed1)
  } else {
    const newCBlacklist = new blacklistChannelSchema({
      id: mongoose.Types.ObjectId,
      channelID: args[0],
      blacklistDate: new Date(),
      reason: args.slice(1).join(' ')
    })
    try {
      newCBlacklist.save()
    } catch (er) {
      const eEmbed = new MessageEmbed()
      eEmbed.setColor('#03d7fc')
      eEmbed.setDescription(er.toString())
      message.channel.send(eEmbed)
    }
    const embed2 = new MessageEmbed()
    embed2.setDescription(`Channel ${args[0]} has been blacklisted.`)
    embed2.setColor('#03d7fc')
    message.channel.send(embed2)
  }
}
module.exports.info = {
  name: 'channelblacklist',
  aliases: ['cbl', 'blacklistchannel']
}
