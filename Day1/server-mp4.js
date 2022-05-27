// server-mp4.js

let http = require('http')
let fs = require('fs')

let host = '127.0.0.1'
let port = 3000

http.createServer((req, res) => {
  console.log(`Port Number: ${port}`)

  // change the MIME type to 'video/mp4'

  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  fs.exists('Video.mp4', (exists) => {
    if (exists) {
      let rstream = fs.createReadStream('video.mp4');
      rstream.pipe(res)
    } else {
      res.end("it's a 404")
      res.end();
    }
  });
}).listen(port);