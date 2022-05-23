// server-html.js

let http = require('http')
let fs = require('fs')


http.createServer(function (req, res) {
  console.log("Port Number : 3000");

  // Change the MIME type from  'tect/plain' to 'tect/html'

  res.writeHead(200, { 'Content-Type': 'text/html' });

  // reading the content file
  fs.readFile('index.html', (err, data) => {
    // checking for errors

    if (err) {
      console.log("Operation Success");
      // Sending the response

      res.end(data)
    }
  });
}).listen(3000);