const { Client, Intents, Collection } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

let bot = {
  client,
};

client.slashcommands = new Collection();
client.events = new Collection();
client.buttons = new Collection();

client.loadSlashCommands = (bot, reload) =>
  require("./handlers/slashcommands")(bot, reload);
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadButtons = (bot, reload) =>
  require("./handlers/buttons")(bot, reload);

client.loadSlashCommands(bot, false);
client.loadEvents(bot, false);
client.loadButtons(bot, false);

module.exports = bot;

client.login(process.env.TOKEN);