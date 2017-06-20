
// for ( var i = 0 ; i < 5 ;  i++ ) { 
//     console.log(i);
// }
// console.log(i); // no error

// for ( let i = 0 ; i < 5 ;  i++ ) { 
//     console.log(i);
// }
// console.log(i); // error

// {
// var i = 10 ; 
// }
// console.log ( i ); // no error

// {
// let i = 10 ; 
// }
// console.log ( i ); // error

{
const i = 10 ; 
    console.log ( i ); // no error
    i = 100; // error
}
console.log ( i ); // error

// function f( ) {
//     var i = 10 ; 
//     console.log(i);
// }
// console.log(i) ; // error