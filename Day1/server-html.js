// server-html.js

// let http = require('http')
// let fs = require('fs')
// let port = 3000


// http.createServer((req, res) => {
//   console.log("Port Number : 3000");

//   // Change the MIME type from  'tect/plain' to 'tect/html'

//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   // reading the content file
//   fs.readFile('index.html', (err, data) => {
//     // checking for errors

//     if (err) {
//       // throw err;
//       console.log("Operation Success");
//       // Sending the response

//       res.end(data)
//     }
//   });
// }).listen(port);


// let http = require('http')
// let fs = require('fs')
// let host = '127.0.0.1'
// let port = 3000

// http.createServer((_req, res) => {
//   console.log(`Port Number : ${port}`)

//   res.writeHead(200, { 'Content-Type': 'text/html' })

//   fs.readFile('index.html', (err, data) => {
//     if (err)
//       throw err;
//     console.log("Operation Success");
//     res.end(data);

//   });
// }).listen(port)




const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
  console.log("Port Number : 3000");
  // change the MIME type from 'text/plain' to 'text/html'
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //reading the content file
  fs.readFile('index.html', (err, data) => {
    //checking for errors
    if (err)
      throw err;
    console.log("Operation Success");
    //sending the response
    res.end(data);
  });
}).listen(3000);