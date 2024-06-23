
let endpoints = new Set();

function webhookRespond(endpoint) {
	const message:string = "Hello Earth";
	const options = {
		method: "POST", 
		cache: "no-cache", 
		headers: {
			"Content-Type": "text/plain",
		},
		body: message
	}
	return fetch(endpoint, options);
}

Bun.serve({
	port: 3000,
	async fetch(req) {
		const url = new URL(req.url);
		console.log("I got got a request from client");
		console.log(url);
		if (url.pathname == "/create"){
			console.log(endpoints)
			let content = ""
			for await (const chunk of req.body){
				console.log(chunk);
				
				content += new TextDecoder().decode(chunk);
			}
			console.log(content);
			endpoints.add(content);
			return new Response("webhhok created");
		}
		return new Response("Default respond: Bun!");
		
	
	},
});

setInterval(() => {
	for (const path of endpoints){
		webhookRespond(path);
	}
}, 500);

console.log("Bun server is up and running on port 3000")
