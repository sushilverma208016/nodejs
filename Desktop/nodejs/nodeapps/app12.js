
const http = require("http");

// this function creates an object that acts as web server (handles http requests)
// and returns reference of the object
const server = http.createServer( function(request, response) { //to receive HTTP requests
    var html = "<h1>Hello Browser</h1>";
    
    console.log( "hello" );
    response.writeHead( 200, { 'Content-Type': 'text/html' } );  
    //'text/html' //'text/plain' //'application/zip'
    response.end( html );
} );

//this starts listening socket
// this socket handles client connection requests and creates new communication socket
// where client sends HTTP requests, Listen remains free to handle other clients' request
server.listen( 1000, function() { // callback: when socket is created it is called
    console.log( "Server listening on port 1000" );
} );