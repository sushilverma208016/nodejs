

const readline = require("readline");

function readlineTimeoutAsync(message, timeout) {
    return new Promise( function ( resolve, reject ) { 
        const ri = readline.createInterface({ input : process.stdin, output : process.stdout }) ;

        let timerid = setInterval( function() {
            reject(); //failed
            clearInterval(timerid);
            ri.close();
        }, timeout);
        ri.question(message, function(input) { 
            ri.close();
            resolve(input); //succes
            clearInterval(timerid);
        } );
    } ); 
}

(async function() {
    try {
        const name = await readlineTimeoutAsync("enter your name: ", 5000);
        console.log( "Hello ", name );
    } catch (e) {
        console.log( "\nException: timeout occured" );
    }
}) ();
