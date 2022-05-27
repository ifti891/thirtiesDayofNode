// Write a File in Nodejs

// There are two ways for writing a file in nodejs :

// Writing the file Asynchronously :

let fs = require('fs');
let content = 'this is the content in the file';
fs.writeFile('message.txt', content, (err) => {
  if (err)
    throw err;
  console.log("it's saved!");
})


// Writing the file Synchronously : 

let fs = require('fs');

let content = "We are writing this file synchronously using node.js";

fs.writeFileSync('content.tex', conent);
console.log("File Written Successfully")