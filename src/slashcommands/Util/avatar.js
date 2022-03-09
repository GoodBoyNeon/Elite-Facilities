const { MessageEmbed } = require('discord.js');

const run = async (client, interaction) => {
	let target = interaction.options.getMember('user') || interaction.member

	try {
		const avatarEmbed = new MessageEmbed()
		.setTitle(`${target.user.username}\'s avatar`)
		.setImage(target.displayAvatarURL({ size: 4096, dynamic: true }))
		.setColor('WHITE')
		.setFooter(`Requested by ${interaction.member.user.tag}`, interaction.member.displayAvatarURL({ dynamic: true }))

		interaction.reply({ embeds: [avatarEmbed] });
	} catch(err) {
		if(err) {
			console.error(err);
		}
	}
}

module.exports = {
	name: 'avatar',
	description: 'get a member\'s or your own avatar',
	options: [
		{
			name: 'user',
			description: 'mention the user who\'s avatar you want, leave this field empty if you want your own avatar.',
			type: 'USER',
			required: false
		}
	], run
}