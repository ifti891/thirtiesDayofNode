// Read a File in Nodejs

// There are two ways for Reading a file in nodejs:

// Reading the file Asynchronously

const fs = require('fs')

fs.readFile('message.txt', (err, data) => {
  if (err)
    throw err;
  console.log(`Content : ${data}`);
});

// Reading the file Synchronously

let fs = require('fs')
let filename = 'content.txt' // Name of the file to be read
let content = fs.readFile(filename)
console.log(`Content : ${content}`)