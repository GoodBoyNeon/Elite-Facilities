const mongoose = require("mongoose");

module.exports = {
  name: "ready",
  run: async (bot) => {
    // <------- MongoDB Setup Start ------->
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log(err);
      });
    // <------- MongoDB Setup End ------->
    const { client } = bot;

    const guildId = "894476530992963605";
    const guild = client.guilds.cache.get(guildId);

    if (!guild) return console.error("Target guild not found");
    await guild.commands.set([...client.slashcommands.values()]);
    console.log(
      `Successfully loaded in ${client.slashcommands.size} slashcommands`
    );

    const presenceArray = [
      {
        content: "you!",
        type: "WATCHING",
        status: "ONLINE",
      },
      {
        content: "squid game",
        type: "WATCHING",
        status: "ONLINE",
      },
      {
        content: "your C: drive",
        type: "WATCHING",
        status: "ONLINE",
      },
      {
        content: "Youtube rewind 2018",
        type: "WATCHING",
        status: "ONLINE",
      },
      {
        content: "Among Us",
        type: "PLAYING",
        status: "ONLINE",
      },
      {
        content: "to Rick Roll",
        type: "LISTENING",
        status: "ONLINE",
      },
      {
        content: "to my Spotify playlist",
        type: "LISTENING",
        status: "ONLINE",
      },
    ];

    function pickPresence() {
      const random = Math.floor(Math.random() * presenceArray.length);

      try {
        client.user.setPresence({
          activities: [
            {
              name: presenceArray[random].content,
              type: presenceArray[random].type,
            },
          ],
          status: presenceArray[random].status,
        });
      } catch (err) {
        console.error(err);
      }
    }

    setInterval(pickPresence, 8 * 1000);

    console.log("Logged in as " + bot.client.user.tag + "!");
  },
};

/*
client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}`)
  const guildId = '894476530992963605';
  const guild = client.guilds.cache.get(guildId);
  if (!guild) return console.error('Target guild not found');
  await guild.commands.set([...client.slashcommands.values()]);
  console.log(
    `Successfully loaded in ${client.slashcommands.size} slashcommands`
  );
});
*/
