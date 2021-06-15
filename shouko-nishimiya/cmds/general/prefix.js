const prefixSchema = require('../../schemas/prefixSchema.js')
const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
module.exports.run = async (client, message, args, guildPrefix) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You need the `MANAGE_GUILD` permission on this server to change the prefix.')
  const findp = await prefixSchema.findOne({ serverID: message.guild.id })
  if (!findp) {
    if (args[0]) {
      var newPrefix = new prefixSchema({
        _id: mongoose.Types.ObjectId(),
        serverID: message.guild.id,
        prefix: args[0]
      })
      await newPrefix.save()
      const embed1 = new MessageEmbed()
      embed1.setDescription(`This server's prefix is now **${newPrefix.prefix}**!`)
      embed1.setColor('#03d7fc')
      message.channel.send(embed1)
    }
    newPrefix.prefix = guildPrefix
  }
}

module.exports.info = {
  name: 'prefix'
}
