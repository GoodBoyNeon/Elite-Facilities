const durations = [
  { name: "60 seconds", value: 60 * 1000 },
  { name: "5 minutes", value: 5 * 60 * 1000 },
  { name: "10 minutes", value: 10 * 60 * 1000 },
  { name: "30 minutes", value: 30 * 60 * 1000 },
  { name: "1 hour", value: 60 * 60 * 1000 },
  { name: "1 day", value: 24 * 60 * 60 * 1000 },
  { name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
];

module.exports = {
  name: "timeout",
  description: "mute a member",
  perm: "MODERATE_MEMBERS",
  options: [
    {
      name: "user",
      description: "the user to mute",
      type: "USER",
      required: true,
    },
    {
      name: "duration",
      description: "duration for this timeout",
      type: "NUMBER",
      choices: durations,
      required: true,
    },
    {
      name: "reason",
      description: "reason for this timeout",
      type: "STRING",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    let member = interaction.options.getMember("user");
    let duration = interaction.options.getNumber("duration");
    let reason =
      interaction.options.getString("reason") || "No reason provided";

    if (!member) return interaction.reply("Invalid member");
    try {
      await member.timeout(duration, reason);
      return interaction.reply(
        `**${member.user.tag}** has been timed out for **${
          durations.find((d) => duration === d.value)?.name
        }** with the reson: **${reason}**`
      );
    } catch (err) {
      if (err) {
        console.error(err);
        interaction.reply(`Failed to timeout ${member.user.tag}`);
      }
    }
  },
};
