const discord = require('discord.js')
const djs = require('discord.js').version
const mem = Math.trunc(process.memoryUsage().rss)
const uptime = process.uptime()
const { botVersion, clientId, owners } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  const e = new discord.MessageEmbed()
  e.setTitle(`${client.user.username} v${botVersion}`)
  e.addField('Author', 'FVSAEZI#2700')
  e.addField('Bot Id', `${clientId}`)
  e.addField('Memory', mem / 1e+6 + 'mb')
  e.addField('Owner IDs', `${owners}`)
  e.addField('Uptime', uptime + ' minutes')
  e.addField('Discord.js Version', djs)
  e.addField('Presence', `${client.guilds.cache.size} Servers\n${client.channels.cache.size} Channels\n${client.users.cache.size} Users`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'stats'
}
