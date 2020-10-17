const discord = require('discord.js')
const dogFacts = require('dog-facts')
module.exports.run = async (client, message, args) => {
  const randomFact = dogFacts.random()
  const e = new discord.MessageEmbed()
  e.setDescription(randomFact + ' :dog:')
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'dogfact',
  aliases: ['doggyfact', 'df', 'dog', 'dogefact']
}
