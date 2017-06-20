
// step 1: load module and get exported object
const readline = require("readline");

// step 2: function get loaded in memeory but doesnot execute until it is called
function readlineAsync(message) {
    //step 7: promise object (in java Completable Future, in .net Task, in c++ Future)
    //step 8: it calls the function passed to its ctor and gives resolve and resolve objects
    return new Promise( function ( resolve, reject ) { //Promise ctor calls it
        //step 9: call createInterface and get ri, this also requests for event loop
        const ri = readline.createInterface({ input : process.stdin, output : process.stdout }) ;
        //step 10: ask for input to the event loop and this is non-blocking
        ri.question(message, function(input) { //step 12: after user type input and hit enter, event loop calls this function to supply input
            ri.close();
            resolve(input); //step 13: end of Promise with success
        } );
    } ); //when function ends Promise ctor ends and main thread returns from readlineAsync with the Promise object
}

// step 3: main get loaded in memeory but doesnot execute until it is called
// will be converted to a class (state machine class) whose object can remember the state of the execution
async function main() {
    // step 5: entering the first state
    //First state
    // await sends the main thread to the event loop until promise is either resolved or rejected
    // step 6: call readlineAsync(:::);
    const a = Number( await readlineAsync("Enter the value of a: ") ); // long running but non-blocking call
    // await will get the main thread back from the event loop here when promise is resolved
    //step 11: await receives incomplete Promise object, hence await sends the main thread to event loop

    //step 14: as soon as promise is complete with success, the main thread will come back to the await with the data that resolve has sent
    //step 15: Number converts data to number format from string format
    //step 16: the data assigned to a

    //step 17: entering second state and again repeat from step 6 
    //Second state    
    // await sends the main thread to the event loop until promise is either resolved or rejected
    const b = Number( await readlineAsync("Enter the value of b: ") ); // long running but non-blocking call
    // await will get the main thread back from the event loop here when promise is resolved

    //Third state    
    const result = a+b;
    console.log( result );
}

// step 4: main is called
main();
