
const app1 = { i : 10, j : 20, k : 30, m : 100, n : 200 };

const app2 = { x : 100, y : 200 };

global.a = 10;

module.exports.app1 = app1;
module.exports.app2 = app2;

// console.log ( module );

// console.log ( "app4lib is loaded" );
console.log  ( global.a );