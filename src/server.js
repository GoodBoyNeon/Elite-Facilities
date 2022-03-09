const express = require('express');
const server = express();

server.all('/', (req, res) => {
	res.send('Server is running!');
});

function hostServer() {
	server.listen(3000, () => {
		console.log('Host server has started. Project will be pinged every 3000ms');
	});
}

module.exports = hostServer