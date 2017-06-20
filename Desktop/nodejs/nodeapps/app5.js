
const readlineAsync = require("./readlineasync");

(async function() {
    const a = Number( await readlineAsync("enter value of a: ") );
    const b = Number( await readlineAsync("enter value of b: ") );
    const result = a + b;
    console.log( result );
}) (); //self callable function