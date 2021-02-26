import Eris = require('eris')
import ini = require('ini')
import fs = require('fs')
const readConfig = ini.parse(fs.readFileSync('./config.ini', 'utf-8').toString());
// @ts-ignore
const client = new Eris(readConfig.TOKEN);
client.connect()