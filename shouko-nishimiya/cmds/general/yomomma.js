const discord = require('discord.js')
const yoMomma = require('yo-mamma').default
module.exports.run = async (client, message, args) => {
  const insult = yoMomma()
  const e = new discord.MessageEmbed()
  e.setDescription(insult + ' :joy:')
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'yomomma',
  aliases: ['ym', 'momma', 'unfunnymomjoke']
}
