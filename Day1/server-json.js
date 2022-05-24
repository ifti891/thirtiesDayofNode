// server - json.js

// let http = require('http')
// let fs = require('fs')
// let host = '127.0.0.1'
// let port = 3000

// console.log("Server will listen at : 127.0.0.1:3000");

// http.createServer(function (req, res) {
// change the MIME type to 'application/json'
// res.writeHead(200, { 'Content-Type': 'application/json' })

// create a JSON

// let json_response = {
//   status: 200,
//   messege: 'Successfull',
//   result: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
//   code: 2000
// }

//   console.log('Server Runnning');
//   res.end(JSON.stringify(json_response));
// }).listen(port)


// let http = require('http')
// let fs = require('fs')
// let host = '127.0.0.1'
// let port = 3000

// console.log(`Server will listen at :  ${host}:${port}`);

// http.createServer(function (req, res) {

// Chnage the MIME type to 'applicationn/json'
// res.writeHead(200, { 'Content-Type': 'application/json' })

// create jSON
//   let json_response = {
//     status: 200,
//     messege: 'Successful',
//     result: ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday ', 'saturday'],
//     code: 2000
//   }
//   console.log('Server Running');
//   res.end(JSON.stringify(json_response));

// }).listen(port)


let http = require('http')
let fs = require('fs')
const { json } = require('node:stream/consumers')

let host = '127.0.0.1'
let port = 3000

console.log(`Server will listen at : ${host}:${port}`)

http.createServer(function (request, response) {
  // change the MIME type to 'application/json'

  response.writeHead(200, { 'Content-Type': 'application/json' })

  // create JSON

  let json_response = {
    status: 200,
    messege: 'successful',
    result: ['january', 'feburary', 'march', 'arpil', 'may', 'june'],
    code: 2000
  }

  console.log('Server Running');
  response.end(JSON.stringify(json_response));

}).listen(port)

