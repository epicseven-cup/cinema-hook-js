const http = require('node:http');
const url = require('node:url');

const port = 3000;
const mockDB = new Set();

async function webhookRespond(endpoint){
	const message = "Hello Earth";
	const options = {
		method: "POST", 
		mode: "cors", 
		cache: "no-cache", 
		headers: {
			"Content-Type": "text/plain",
		},
		body: message
	}
	return fetch(endpoint, options)
}


const s = http.createServer(function (req, res) {
	console.log("Request is here");
	const url = req.url;
	console.log(url);
	const requestMethod = req.method;
	// Creating Webhook endpoint
	if (url == '/create' && requestMethod == 'POST'){
		console.log("The creation request is here");
		let body = '';
		req.on('data', (bytes) => {
			body += bytes;
		});
		req.on('end', () => {
			mockDB.add(body);
			console.log(`Body: ${body}`);
			// Returning respond to the client with the url endpoint
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end(`Webhook endpoint: ${body}`);
		});
	}
	// Send request to all the webhook endpoint that was given by the user
	for (const endpoint of mockDB){
		console.log(`Endpoint: ${endpoint}`);
		webhookRespond(endpoint);
	}
}).listen(port);

console.log("Node server is up");
while (true){}
