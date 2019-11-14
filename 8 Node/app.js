
//app.js
let library = require('./library.js');

let instA = new library.library_generates_object();
let instB = new library.library_generates_object();

instA.my_a = 111;
instB.my_a = 666;

console.log(instA.my_a)
console.log(instB.my_a)
