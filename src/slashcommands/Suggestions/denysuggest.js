const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'deny',
	description: 'deny a suggestion',
	options: [
		{
			name: 'message-id',
			description: 'message id the suggestion',
			type: 'STRING',
			required: true
		},
		{
			name: 'reason',
			description: 'reason for denying the suggestion',
			type: 'STRING',
			required: true
		}
	],
	run: async (client, interaction) => {
		let messageId = interaction.options.getString('message-id');
		let reason = interaction.options.getString('reason');
    let suggestionChannel = interaction.guild.channels.cache.get('894807015602417705');
    let suggestionMsg = await suggestionChannel.messages.fetch(messageId);

		let suggestionEmbed = suggestionMsg.embeds[0];

    if(!interaction.member.roles.cache.has('940999691032743976')) return interaction.reply({ content: 'You are not allowed to use this command!', ephemeral: true })
		
    let denyEmbed = new MessageEmbed()
		.setAuthor({ name: `${suggestionEmbed.author.name}`, iconURL: `${suggestionEmbed.author.iconURL}` })
    .setTitle(`${suggestionEmbed.title}`)
    .setDescription(`${suggestionEmbed.description}`)
		.setFooter({ text: `denied by ${interaction.member.user.tag}`, iconURL: `${interaction.member.displayAvatarURL()}` })
    .setColor('RED')
    .addFields(
      { name: 'Status', value: `\<:nononon:908293430260695080> thank you for your suggestion. but the community does not seem to be interested in it for now.\n**Reason:** ${reason}`}
    )
    await suggestionMsg.edit({ embeds: [denyEmbed] })
		await interaction.reply({ content: 'Suggestion denied!', ephemeral: true })
	}
}