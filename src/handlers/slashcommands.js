const fs = require('fs');

const getFiles = (path, ending) => {
	return fs.readdirSync(path).filter(f => f.endsWith(ending));
};

module.exports = (bot, reload) => {
	const {client} = bot;

	fs.readdirSync('./src/slashcommands/').forEach((category) => {
		let slashcommands = getFiles(`./src/slashcommands/${category}`, '.js');
	  if(slashcommands.length === 0)
		console.log('No slashcommands loaded');

	  slashcommands.forEach((f) => {
		  if(reload) delete require.cache[require.resolve(`../slashcommands/${category}/${f}`)]
			
		  const slashcmd = require(`../slashcommands/${category}/${f}`);
		  client.slashcommands.set(slashcmd.name, slashcmd)
	  })
	})
};