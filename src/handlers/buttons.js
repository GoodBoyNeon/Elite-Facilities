const fs = require('fs');

const getFiles = (path, ending) => {
	return fs.readdirSync(path).filter(f => f.endsWith(ending));
};

module.exports = (bot, reload) => {
	const {client} = bot;

	fs.readdirSync('./src/buttons/').forEach((command) => {
		let buttons = getFiles(`./src/buttons/${command}/`, '.js');

		buttons.forEach((f) => {
			if(reload)
				delete require.cache[require.resolve(`../buttons/${command}/${f}`)]

			const button = require(`../buttons/${command}/${f}`)
			client.buttons.set(button.name, button)
		});
	});
}