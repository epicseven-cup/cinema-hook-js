const http = require('node:http');
const url = require('node:url');
const port = 8080;


// Break this apart into request and client server
// Looks like the fetch is just stuck
async function sendCreationRequest(){
	const server = 'http://nodejs-server:3000/create';
	const message = `http://nodejs-client:${port}`
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain'
		},
		body: message
	};
	console.log(server);
	console.log(message);
	const r = fetch(
		server, 
		options
	);
	console.log(r);
	return r;
}

const c = http.createServer(function (req, res) {
	let body = '';
	req.on('data', (bytes) => {
		body += bytes;
	});
	req.on('end', () => {
		console.log(body);
	});
}).listen(port);

const promise = sendCreationRequest()
console.log(promise);
promise.then( text => {
	console.log(text);
});

console.log("Request is being made right now");

while(true){
	console.log(promise);
}
