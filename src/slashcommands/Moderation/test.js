const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'test',
	description: 'test',
	perm: 'ADMINSTRATOR',
	run: async (client, interaction) => {
		let testButton = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('test')
			.setStyle('PRIMARY')
			.setCustomId('test')
		)
		
		interaction.reply({
			content: 'test',
			components: [testButton],
		})
	}
}