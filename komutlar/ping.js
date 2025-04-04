exports.run = async (client, message, args) => {
  message.reply("Pong!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Botun pingini gösterir.",
  usage: "ping"
};
