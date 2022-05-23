// server-json.js

let http = require('http')
let fs = require('fs')
let host = '127.0.0.1'
let port = 3000

console.log("Server will listen at : 127.0.0.1:3000");

http.createServer(function (req, res) {
  // change the MIME type to 'application/json'
  res.writeHead(200, { 'Content-Type': 'application/json' })

  // create a JSON

  let json_response = {
    status: 200,
    messege: 'Successfull',
    result: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    code: 2000
  }

  console.log('Server Runnning');
  res.end(JSON.stringify(json_response));
}).listen(port)