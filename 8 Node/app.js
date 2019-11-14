
//app.js
let library = require('./library.js');

var instA = library.library_generates_object();
var instB = library.library_generates_object();

instA.my_a = 111;
instB.my_a = 666;

console.log(instA.my_a)
console.log(instB.my_a )
