// server-pdf.js

let http = require('http');
let fs = require('fs');
let host = '127.0.0.1'
let port = 3000

console.log(`Server will listen at : ${host}:${port}`);

http.createServer((request, response) => {

  console.log(`Port Number : ${port}`)

  // change the MIME to 'appliction/pdf'
  response.writeHead(200, { 'Content-Type': 'application/pdf' })

  fs.readFile('index.pdf', (error, data) => {
    if (error) {
      response.json({ 'status': 'error', msg: err })

    } else {
      response.write(data);
      response.end();
    }
  });
}).listen(port)

