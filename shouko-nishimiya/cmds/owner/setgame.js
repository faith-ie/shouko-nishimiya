const { owners } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) return
  client.user.setActivity(args.slice(0).join(' ')).then(message.channel.send('👌'))
}
module.exports.info = {
  name: 'setgame',
  aliases: ['sg', 'game']
}
