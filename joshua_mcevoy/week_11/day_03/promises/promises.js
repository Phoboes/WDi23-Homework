//Promises are an alternative to callbacks


// A promise is just an object with two methods: .then() and .catch()

const fs = require('fs'); // The Node.js standard library for file systems.

// fs.readFile('example.txt', 'utf-8', function(err, content){
//   if(err){
//     throw err; //Immediately abandon program.
//   }
//   console.log(content);
// });
//
// console.log('hello');

// Modern style using Promises
const readFile = function(filename){
  return new Promise(function(resolve, reject){
    //This function has to call: resolve() and reject();
    fs.readFile(filename, 'utf-8', function(err, content){
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    })
  });
}

readFile('example.txt').then(function(content){
  console.log(content);
}).catch(function(err){
  console.log('There was an error.', err);
});
