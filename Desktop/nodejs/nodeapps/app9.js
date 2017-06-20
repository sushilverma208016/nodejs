
const rla = require('./readlineasync');

(async function () {

    setInterval(function() {
        console.log ( "\ntimer ticked: ", new Date().getSeconds() );
    }, 3000);
    
    var items = [] ;
    while(true) {
        var input = await rla("enter value: ") ; 
        if ( input == "quit") break ;
        items.push ( Number (  input ) )   ;
    }
    console.log ( items.length );
    
}) ();