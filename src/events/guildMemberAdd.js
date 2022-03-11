const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  run: async (bot, member) => {
    const JoinLogEmbed = new MessageEmbed()
      .setAuthor({
        name: `${member}`,
        iconURL: `${member.displayAvatarURL({
          dynamic: true,
        })}`,
      })
      .setTitle("A new member joined!")
      .setDescription("");
  },
};
