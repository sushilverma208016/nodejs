
const readlineAsync = require("./readlineasync");

function sum(items) {
    let s = 0 ;
    for ( let item of items ) { //foreach
        s += item ; 
    }
    return s;
}

function biggest(items) {
    let s = 0 ;
    for ( let item of items ) { //foreach
        if (s<item) s= item;
    }
    return s;
}

function smallest(items) {
    let s = Math.pow(2, 32);
    for ( let item of items ) { //foreach
        if (s>item) s= item;
    }
    return s;
}

( async function() {
    const items = [ ] ; // blank array // new Array() ;
    while ( true ) { 
        var input = await readlineAsync("enter the value: ");
        if ( input === "quit") break;
        items.push ( Number(input) ) ; // grows the array and adds the item
    }
    console.log ( sum(items) );
    console.log ( biggest(items) );
    console.log ( smallest(items) );
})( ) ;
