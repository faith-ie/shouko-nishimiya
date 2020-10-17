const discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const ping = client.ws.ping
  const e = new discord.MessageEmbed()
  e.setDescription(`**${message.author.username}**🏓 ${ping}ms`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'ping'
}
