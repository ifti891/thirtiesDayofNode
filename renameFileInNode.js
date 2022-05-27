// Rename a File in Nodejs

// There are two ways for Renaming a file in nodejs :

//    Renaming the file Asynchronously : 

let fs = require('fs');
// you have to pass the relative path of the file from current working directory.

fs.rename('data.txt', 'new_data.txt', (err) => {
  if (err)
    throw err;
  console.log("File renamed successfully");

});

// To check it's Asynchronous nature !

console.log("This method is Asynchronous");


// Renaming the file Synchronously : 

let fs = require('fs');

// pass relative path of the file from current working directory

fs.renameSync('dta.txt', 'newData.txt');
console.log("File renamed successfully");

// to check it's synchronous nature
console.log9("This method is Scnchronous!");


