
const readline = require("readline");

function readlineAsync(message) {
    return new Promise( function ( resolve, reject ) { 
        const ri = readline.createInterface({ input : process.stdin, output : process.stdout }) ;
        ri.question(message, function(input) { 
            ri.close();
            resolve(input); 
        } );
    } ); 
}

module.exports = readlineAsync;