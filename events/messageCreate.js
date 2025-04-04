module.exports = (client, message) => {
  const ayarlar = require("../ayarlar.json");
  if (!message.content.startsWith(ayarlar.prefix) || message.author.bot) return;

  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    command.run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply("Komutu çalıştırırken bir hata oluştu.");
  }
};
