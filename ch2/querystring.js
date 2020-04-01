//  const querystring = require('querystring');
//
// const someText = querystring.parse('name=muhammed & lasname=essa')
//
// console.log(someText);


 const querystring = require('querystring');

const someText = querystring.stringify({ name: 'muhammed','lasname': 'essa' })

console.log(someText);
