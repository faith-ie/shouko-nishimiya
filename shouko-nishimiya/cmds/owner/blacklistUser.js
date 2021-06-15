const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const { owners } = require('../../config.json')
const blacklistUserSchema = require('../../schemas/blacklistUserSchema')
module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) return
  const findu = await blacklistUserSchema.findOne({ userID: args[0] })
  if (findu) {
    const embed1 = new MessageEmbed()
    embed1.setDescription(`User ${args[0]} already exists in the database.`)
    embed1.setColor('#03d7fc')
    message.channel.send(embed1)
  } else {
    const newUBlacklist = new blacklistUserSchema({
      id: mongoose.Types.ObjectId,
      userID: args[0],
      blacklistDate: new Date(),
      reason: args.slice(1).join(' ')
    })
    try {
      newUBlacklist.save()
    } catch (er) {
      const eEmbed = new MessageEmbed()
      eEmbed.setColor('#03d7fc')
      eEmbed.setDescription(er.toString())
      message.channel.send(eEmbed)
    }
    const embed2 = new MessageEmbed()
    embed2.setDescription(`User ${args[0]} has been blacklisted.`)
    embed2.setColor('#03d7fc')
    message.channel.send(embed2)
  }
}
module.exports.info = {
  name: 'userblacklist',
  aliases: ['ubl', 'blacklistuser']
}
