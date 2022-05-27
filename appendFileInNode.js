// Append a File using Nodejs

// There are two ways for Appending a file using nodejs :

// Appending the file Asynchronously : 

let fs = require('fs');
new_data = "This dat will be appended at the end of the file.";

fs.appendFile('input.text', new_data, (err) => {
  if (err)
    throw err;
  console.log('the new_content was appended successfully')
});