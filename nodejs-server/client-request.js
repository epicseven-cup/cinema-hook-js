const http = require('node:http');
const url = require('node:url');
const port = 8080;

console.log("Starting to send webhook creation requqest");
async function sendCreationRequest(){
	const server = 'http://nodejs-server:3000/';
	const message = `http://nodejs-client:${port}`
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain'
		},
		body: message
	};
	const r = await fetch(
		server, 
		options
	);
	return r;
}

const promise = sendCreationRequest()
promise.then( text => {
	console.log(text);
});

while(true){
	sendCreationRequest();
};
