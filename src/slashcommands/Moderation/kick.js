module.exports = {
  name: "kick",
  description: "kicks a member from the server",
  perm: "KICK_MEMBERS",
  options: [
    {
      name: "user",
      description: "the user to kick",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "the reason for kicking the user",
      type: "STRING",
    },
  ],
  run: async (client, interaction) => {
    let target = interaction.options.getMember("user");
    let reson = interaction.options.getString("reason");

    let kickEmbed = new MessageEmbed()
      .setTitle(`Successfully kicked **${target}** for **${reason}**`)
      .setColor("WHITE");

    await interaction.guild.members.kick(target, reason);
    return interaction.reply({ embeds: [kickEmbed] });
    target.send(
      `You have been kicked from **Elite hub** for **${reason}**\nresponsible moderator: ${interaction.member.user.tag}`
    );
  },
};
