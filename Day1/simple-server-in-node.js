// simple-server-in-noe.js

// Node provide us with the inbuilt http module which we can use to create the server. Get the access to the module by using require

// let http = require('http');


// Mention the host i.e. localhost (127.0.0.1) to serve it locally.
// let host = '127.0.0.1'

//Mention the port. We are using port : 3000 for our example.
// let port = 3000


// Create a server using the createServer() method. createServer() method takes a callback function as arguments. This callback is executed each time a request is received.

// he two arguments of createServer() method are request : which contains all the information related to client's request such as URL, custom headers , client info , etc. 

// response : which is used to return the data back to the client.
// let server = http.createServer((request, response) => {

// response.writeHead is an inbuilt method which is used to send the 
// response.writeHead(200, { "Content-Type": "text/plain" });

// And after that we are just Printing the value on the console using console.log() function.
// console.log("Server Working");

// response.end() is an inbuilt function which is used to tell the server that the request has been fulfilled.Along with that we can also send one response using this.
//   response.end("Server Working Success");
// });

// server.listen() is an inbuilt method used to bind to the port an start listening for incoming connections. 
// server.listen(port, host, (error) => {
//   if (error) {
//     return console.log("Error occured : ", error);
//   }
//   console.log("Server is listening on " + host + ":" + port);
// })



// let http = require('http');

// let host = '127.0.0.1'

// let port = 3000

// let server = http.createServer((request, response) => {

//   response.writeHead(200, { "Content-Type": "text/plain" });

//   console.log("Server Working")

//   response.end("Server Working Success")
// });

// server.listen(port, host, (error) => {

//   if (error) {
//     return console.log('Error occured : ', error)
//   }
//   console.log(`Server is listening on ${host} : ${port}`);
// });


// let http = require('http');
// let host = '127.0.0.1'
// let port = 3000

// let server = http.createServer((request, response) => {

//   response.writeHead(200, { 'Content-Type': 'text/plain' })

//   console.log('Server working')

//   response.end('Server working success')
// });

// server.listen(port, host, (error) => {
//   if (error) {
//     return console.log('Error occured : ', error)
//   }
//   console.log(`Server is listening on  ${host} : ${port}`)
// });


// let http = require('http')
// let host = '127.0.0.1'
// let port = 3000

// let server = http.createServer((request, response) => {

//   response.writeHead(200, { 'Content-Type': 'type/plain' })

//   console.log('Server working')

//   response.end('server working success')
// });

// server.listen(port, host, (error) => {
//   if (error) {
//     return console.log('Error occured : ', error)
//   }
//   console.log(`Server is listening on ${host} : ${port}`)
// });


// let http = require('http')
// let host = '127.0.0.1'
// let port = 3000

// let server = http.createServer((request, response) => {

//   response.writeHead(200, { "Content-Type": "text/plain" })
//   console.log('Server working')
//   response.end("Server working success")
// });

// server.listen(port, host, (error) => {
//   if (error) {
//     return console.log('Error occured : ', error)
//   }
//   console.log(`Server is listening on ${host} : ${port}`)
// });


let http = require('http');

let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("server Working");
  response.end('Server Working Success');
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log('Error occured : ', error);
  }

  console.log(`server is listening on ${host} : ${port}`);
});	

