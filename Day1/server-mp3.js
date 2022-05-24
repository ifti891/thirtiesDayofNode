// server-mp3.js

// let http = require('http');
// let fs = require('fs');
// const { ReadStream } = require('tty');
// let host = '127.0.0.1'
// let port = 3000

// http.createServer((req, res) => {
//   console.log(`Port Number : ${port}`)

// chnage in MIME type to 'audio/mp3'

//   res.writeHead(200, { 'Content-Type': 'audio/mp3' })
//   fs.exists('audio.mp3', function (exists) {
//     if (exists) {
//       let rstream = fs.createReadStream('audio.mp3')
//       ReadStream.pipeline(res)
//     } else {
//       res.end("Its a 404")
//     }
//   });
// }).listen(port);



let http = require('http')
let fs = require('fs')
let host = '127.0.0.1'
let port = 3000

http.createServer((req, res) => {
  console.log(`Port  Number: ${port}`);

  res.writeHead(200, { 'Content-Type': 'audio/mp3' })


  fs.exists('audio.mp3', (exists) => {
    if (exists) {
      let rstream = fs.createReadStream('audio.mp3');
      rstream.pipe(res);
    } else {
      res.end("it's a 404")
    }
  });
}).listen(port)