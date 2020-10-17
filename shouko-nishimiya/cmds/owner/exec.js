var processes = require('child_process')
const { owners } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  // Check if the user has permission to run this command.
  if (!owners.includes(message.author.id)) return
  // Run the shell command.
  const result = await new Promise((rs, rj) => processes.exec(args.join(' '), (err, stdout, stderr) => err ? rj(err) : rs({ out: stdout.toString().trim(), err: stderr.toString().trim() })))
  // Format the output.
  let output = ''
  if (result.out !== '') output += '\n' + result.out
  if (result.err !== '') output += (output !== '' ? '\n\n' : '') + '\n' + result.err
  // Check if we can send on Discord.
  if (output.length < 2000) {
    // Send it on Discord.
    message.channel.send('Result:\n\`\`\`js\n' + output + '\`\`\`')
  } else {
    message.channel.send('Output too long. ')
  }
}
module.exports.info = {
  name: 'exec',
  aliases: ['ex', 'shell']
}
