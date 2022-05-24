// Create a server in node js

let http = require('http');
let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'test/plain' });

	console.log('Server working');

	response.end('Server working success');
});

server.listen(port, host, (error) => {
	if (error) {
		return console.log('Error occured : ', error)
	}

	console.log(`server is listening on ${host} : ${port}`)
})