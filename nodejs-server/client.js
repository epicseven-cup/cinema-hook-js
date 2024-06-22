

const port = 8080;

const c = http.createServer(function (req, res) {
	let body = '';
	req.on('data', (bytes) => {
		body += bytes;
	}
	req.on('end', () => {
		console.log(body);
	})
}).listen(port);


const server = 'nodejs-server:3000';
const message = `nodejs-client:${port}`;
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'text/plain'
	},
	body: message
};
const respond = fetch(
	server, 
	options
);

