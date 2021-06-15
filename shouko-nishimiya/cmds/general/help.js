const discord = require('discord.js')
const { prefix } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  const e = new discord.MessageEmbed()
  e.setTitle(`${client.user.username} help`)
  e.addField('Shipping', 'Ship your servermates!')
  e.addField('Yomomma', 'Get yo momma jokes!')
  e.addField('Catfact', 'Get a fact about cats!')
  e.addField('Rate', 'Rate a user on hotness!')
  e.addField('Dogfact', 'Get a fact about dogs!')
  e.addField('Ping', 'Pong!')
  e.addField('Penis', 'How big is your penis?')
  e.addField('Bible', 'Get bible verse!')
  e.addField('Stats', 'View Bot Stats!')
  e.addField('Help', 'This help command!')
  e.addField('Prefix', `Set the bot's prefix in the server! (you need \`MANAGE_GUILD\` to change it.) (The default prefix of ${prefix} will still work regardless.) `)
  e.setColor('#03d7fc')
  e.setDescription('***IMPORTANT UPDATE - 5/18/2021***: I have added a proper database to the bot. Orginally I had planned to roll out the database with the rewrite coming in v2 of the bot, but I decided to add the database now.\nOn a side note however, I would like to thank everyone for using this bot. I honestly have never had a bot this big before lmao, so thank you ❤')
  e.setFooter('You can view my source code at https://github.com/Faith1sGay/shouko-nishimiya ❤')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'help',
  aliases: ['h']
}
