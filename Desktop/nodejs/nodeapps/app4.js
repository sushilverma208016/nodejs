
// var app= { i : 10, j : 20, k : 30 };

// // app = { };
// app.m = 100;
// app.n = 200;

const app = require("./app4lib");

const b4 = require("./app4blib");
b4();
console.log ( app.app1.i );
console.log ( app.app2.x );
// console.log ( app );
console.log ( global.a );
