
const readlineAsync = require("./readlineasync");

(async function() {
    var sum = 0;
    var max = 0;
    while (true) {
        const inp =  await readlineAsync("Enter number: ");
        if (inp==="quit") break;
        sum += Number( inp );
        if (max < Number( inp )) max = Number( inp ); 
    }
    console.log( sum );
    console.log( max );
}) (); //self callable function