// Figure out how to wrap setTimeout in a Promise.
//
// The working code should allow you to run code like this:
//
// wait(3000).then(function () {
//   console.log('3 seconds have elapsed');
// }).then(function () {
//   console.log('Thanks for using this function');
// });
//
// You don't need to worry about handling errors with .catch() because (if you think about it) there's no way errors can arise when waiting for a timeout.


function wait(ms){
    console.log('started');
    // new promise
    return new Promise(function(resolve,reject){
        console.log(this);
        window.setTimeout(function(){
            // resolve inside the callback of settimeout
            resolve(ms);
	    reject(ms);
        },ms);
    });
};

wait(3000).then(function(){
  console.log('3 seconds have elapsed');
}).then(function() {
  console.log('Thanks for using this function');
});
