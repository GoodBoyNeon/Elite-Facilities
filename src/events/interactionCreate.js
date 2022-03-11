const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  run: async (bot, interaction) => {
    const { client } = bot;

    if (interaction.isCommand()) handleSlashCommands(bot, interaction);
    else if (interaction.isButton()) handleButtons(bot, interaction);
    else if (interaction.isSelectMenu()) handleSelectMenus(bot, interaction);
  },
};

const handleButtons = (bot, interaction) => {
  const { client } = bot;
  const buttonId = client.buttons.get(interaction.customId);

  if (!buttonId)
    return interaction.reply({ content: "button not found", ephemeral: true });

  try {
    buttonId.run(client, interaction);
  } catch (err) {
    console.error(err);
    interaction.reply({
      content: "there was an error executing this command!",
      ephemeral: true,
    });
  }
};

const handleSlashCommands = (bot, interaction) => {
  const { client } = bot;

  if (!interaction.inGuild())
    return interaction.reply("This command can only be executed in a server");

  const slashcmd = client.slashcommands.get(interaction.commandName);
  if (!slashcmd) return;
  if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
    return interaction.reply(
      "You donot have required permissions to use this command."
    );

  slashcmd.run(client, interaction);
};

const handleSelectMenus = async (bot, interaction) => {
  const { client } = bot;
  const { values } = interaction;

  if (interaction.customId === "role-selector") {
    await interaction.reply({
      content: "Updating roles...",
      components: [
        new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("Show my roles")
            .setStyle("PRIMARY")
            .setCustomId("roleSelector-button")
        ),
      ],
      ephemeral: true,
    });

    for (const id of values) {
      if (!interaction.member.roles.cache.has(id)) {
        interaction.member.roles.add(id, ["self-assignable role"]);
        interaction.followUp({
          embeds: [
            new MessageEmbed()
              .setColor("GREEN")
              .setTitle("Roles Added")
              .setDescription(`Added role(s): <@&${id}>`),
          ],
          ephemeral: true,
        });
      } else if (interaction.member.roles.cache.has(id)) {
        interaction.member.roles.remove(id, ["self-assignable role"]);

        interaction.followUp({
          embeds: [
            new MessageEmbed()
              .setColor("RED")
              .setTitle("Roles removed")
              .setDescription(`Removed role(s): <@&${id}>`),
          ],
          ephemeral: true,
        });
      }
    }
  }
};

/*
	client.on("interactionCreate", interaction => {
  if(!interaction.isCommand()) return
	if (!interaction.inGuild())
    return interaction.reply("This command can only be executed in a server");

  const slashcmd = client.slashcommands.get(interaction.commandName);
  if (!slashcmd) return;
  if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
    return interaction.reply("You donot have required permissions to use this command.");

	slashcmd.run(client, interaction);
});
*/
