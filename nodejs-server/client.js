const http = require('node:http');
const url = require('node:url');


const port = 8080;

const c = http.createServer(function (req, res) {
	let body = '';
	req.on('data', (bytes) => {
		body += bytes;
	});
	req.on('end', () => {
		console.log(body);
	});
}).listen(port);


const server = 'http://nodejs-server:3000/create';
const message = `http://nodejs-client:${port}`;
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'text/plain'
	},
	body: message
};
console.log(server);
const respond = fetch(
	server, 
	options
);

