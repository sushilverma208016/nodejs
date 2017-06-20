
const http = require("http");
const server = http.createServer( function(request, response) { 
    var html = "<h1>Hello Browser</h1>";
    
    console.log( "hello" );
    response.writeHead( 200, { 'Content-Type': 'text/html' } );
    response.end( html );
} );

// false: null, undefined, NaN, false
// when we run node.exe and give JS to it: process.env.port is undefined
// when node is hosted in IIS, some other web server: process.env.port is NOT undefined
const port = process.env.port || 1000;

server.listen( port, function() { 
    console.log( "Server listening on port", port );
} );