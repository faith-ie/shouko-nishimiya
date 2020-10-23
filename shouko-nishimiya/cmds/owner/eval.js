const { owners } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  if (!owners.includes(message.author.id)) return
  const clean = text => {
    if (typeof (text) === 'string') { return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)) } else { return text }
  }
  try {
    const code = args.join(' ')
    let evaled = eval(code) // eslint-disable-line no-eval
    if (evaled.then) evaled = await evaled
    if (typeof evaled !== 'string') { evaled = require('util').inspect(evaled).substring(1, 1997) }
    message.channel.send(clean(evaled), { code: 'js' })
  } catch (err) {
    message.channel.send(`\`ERROR\`\n\`\`\`js\n${clean(err)}\n\`\`\``)
  }
}

module.exports.info =
{
  name: 'eval',
  aliases: ['e', 'ev']
}
