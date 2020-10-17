const discord = require('discord.js')
const bibleverses = require('bibleverses')
module.exports.run = async (client, message, args) => {
  const bible = bibleverses.retrievePassage(args.slice(0).join(' ')).then(response => {
    const e = new discord.MessageEmbed()
    e.setDescription(response)
    e.setColor('#03d7fc')
    message.channel.send(e)
  })
}
module.exports.info =
{
  name: 'bible',
  aliases: ['b', 'religousbook']
}
