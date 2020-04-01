//Asynchronous
var fs = require('fs');
fs.readFile('input.txt',function(err,data) {
  if(err){
    return console.error(err);
  }
  console.log('Async data read' + data.toString());
});
//synchronous
var data = fs.readFileSync('input.txt');
console.log('sync read'+ data.toString());
console.log('App ended');
