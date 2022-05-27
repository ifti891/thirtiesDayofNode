// Delete a File in Nodejs

// There are two ways for deleting a file in nodejs :

//    Deleting the file Asynchronously : 

let fs = require('fs');

let filename = 'content.txt'
fs.unlink(filename, (err) => {
  if (err)
    throw err;
  console.log("File Deleted successfully");
})

// Deleting the file Synchronously : 

let fs = require('fs');
let filename = 'data.text'

fs.unlinkSync(filename);
console.log("File Deleted successfully");