// setInterval(function () {
//   console.log("Muhammed Essa");
// },500);

// var count1 = 0;
// console.log(count1);
// setInterval(function () {
// count1++;
//   console.log("Muhammed Essa" + "  "+count1);
// },1000);



// setTimeout(function () {
//    console.log("Muhammed Essa"  );
// },1000);



// var recursive = function(){
//   console.log("Muhammed Essa");
//   setTimeout(recursive,1000);
// }
//
// recursive();


function muhammed(){
  console.log("Welcome NodeJS");
}

var essa = setTimeout(muhammed,1000);
var hameed = setInterval(muhammed,1000);

clearTimeout(essa);
//clearInterval(hameed);
