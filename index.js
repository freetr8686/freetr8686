const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const ayarlar = require('./ayarlar.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./komutlar/${file}`);
    client.commands.set(command.help.name, command);
}

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} olarak giriş yaptı!`);
});

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
}

client.login(ayarlar.token);
