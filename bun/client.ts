Bun.serve({
	port: 8080,
	async fetch(req) {
		console.log("I got request from the wehook server");
		return new Response("http://client:8080");
	},
});

console.log("Client Bun server is up and running on port 8080");
