const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'choose',
	description: 'let the bot randomly choose within the given options',
	options: [
		{
			name: 'option-1',
			description: 'first option',
			type: 'STRING',
			required: true
		},
		{
			name: 'option-2',
			description: 'second option',
			type: 'STRING',
			required: true
		},
		{
			name: 'option-3',
			description: 'third option',
			type: 'STRING'
		},
		{
			name: 'option-4',
			description: 'fourth option',
			type: 'STRING'
		},
		{
			name: 'option-5',
			description: 'fifth option',
			type: 'STRING'
		},
		{
			name: 'option-6',
			description: 'sixth option',
			type: 'STRING'
		},
		{
			name: 'option-7',
			description: 'seventh option',
			type: 'STRING'
		},
		{
			name: 'option-8',
			description: 'eighth option',
			type: 'STRING'
		},
		{
			name: 'option-9',
			description: 'ninth option',
			type: 'STRING'
		},
		{
			name: 'option-10',
			description: 'tenth option',
			type: 'STRING'
		}
	],
	run: async (client, interaction) => {
		if(interaction.member.id !== '816253376962625537') return interaction.reply({
			content: 'command still in progress!',
			ephemeral: true
		})
		const { options } = interaction;
		let first = options.getString('option-1');
		let second = options.getString('option-2');
		let third = options.getString('option-3');
		let fourth = options.getString('option-4');
		let fifth = options.getString('option-5');
		let sixth = options.getString('option-6');
		let seventh = options.getString('option-7');
		let eighth = options.getString('option-8');
		let ninth = options.getString('option-9');
		let tenth = options.getString('option-10');

		const optionsArray = [
			first,
			second,
			third,
			fourth,
			fifth,
			sixth,
			seventh,
			eighth,
			ninth,
			tenth
		]

		try {
			const result = Math.floor(Math.random() * optionsArray.length)
		  await interaction.reply(result)
		} catch (err) {
			console.error(err)
		}
	}
}