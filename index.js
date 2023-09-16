const { Client, GatewayIntentBits, Partials, collection } = require('discord.js');
const config = require('./config.json');
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
    intents: 3243773,
    partials: [User, Message, GuildMember, ThreadMember],
  });
 
client.setMaxListeners(0);

client.login(config.token).then(() => {
    console.log('${client.user.username} Esta online.');
}).catch((err) => {
    console.log(err);
});