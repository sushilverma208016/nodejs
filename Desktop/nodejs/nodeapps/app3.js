// take 2 numbers from user add them and display output

var a, b;

const readline = require("readline");

const ri1 = readline.createInterface({ //requests for event loop
    input: process.stdin,
    output: process.stdout
}); //non-blocking call

//the input to be collected from event loop
ri1.question( "Enter value of a: ", function(input1) { 
    a = Number( input1 ); 
    ri1.close();
    // console.log( typeof a); 

        const ri2 = readline.createInterface({ //requests for event loop
            input: process.stdin,
            output: process.stdout
        }); //non-blocking call

        ri2.question( "Enter value of b: ", function(input1) { 
            b = Number( input1 ); 
            ri2.close();
            // console.log( typeof b); 
            var result = a+b;
            console.log( result );
        } );  //non-blocking call //scanf in C

} );  //non-blocking call //scanf in C

// console.log ( "\n" );
// console.log ( "something" ); //non-blocking call //node never sleeps
// var result= a+b; //undefined + undefined= NaN   (typeof NaN)= Number
