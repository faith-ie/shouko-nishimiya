const discord = require('discord.js')
const catFacts = require('cat-facts')
module.exports.run = async (client, message, args) => {
  const randomFact = catFacts.random()
  const e = new discord.MessageEmbed()
  e.setDescription(randomFact + ' :cat:')
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'catfact'
}
