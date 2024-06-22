const http = require('node:http');
const url = require('node:url');
const port = 8080;

const c = http.createServer(function (req, res) {
	console.log("Request hit on client server");
	let body = '';
	req.on('data', (bytes) => {
		body += bytes;
	});
	req.on('end', () => {
		console.log(body);
	});
}).listen(port);
console.log("Client server is up and running");
