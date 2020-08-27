require('dotenv').config();

const { Client } = require('discord.js');

console.log(process.env.DISCORD_BOT_TOKEN);

const bot = new Client();

(async function () {
  await bot.login(process.env.DISCORD_BOT_TOKEN);

  bot.on('ready', () => {
    console.log(`Bot ${bot.user.username} is active`);
  });

  bot.on('message', (msg) => {
    if (msg.content.match(/^halo$/)) {
      msg.reply(`halo kembali ${msg.author.username} !`);
    }
  });
})();
