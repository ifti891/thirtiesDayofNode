// server-string.js


// let http = require('http')
// let host = '127.0.0.1'
// let port = 3000

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.write("Hello World!")
//   res.end()
// });

// server.listen(port, host, (error) => {
//   if (error) {
//     return console.log("Error occured : ", error)
//   }
//   console.log(`Server is listening on host: ${host} : ${port}`)
// })

//
let http = require('http')
let HOST = '127.0.0.1'
let PORT = 3000

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hello world this response is served as string')
  res.end()
})

server.listen(PORT, HOST, (error) => {
  if(error){
    return console.log('Error occured : ', error)

  }
  console.log(`Server is listenng on host : ${HOST} and port ${PORT}`)
})

let http = require('http')
const { request } = require('https')
let HOSt = '127.0.0.1'
let PORT = 3000

let server = http.createServer((req, res) => {
  request.writeHead(200,{'Content-Type': 'text/plain'})
})