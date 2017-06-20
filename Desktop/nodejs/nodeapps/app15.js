
const express = require("express"); //this exports function object

const server = express(); //creates server object

server.get( "/", (req, res) => res.send( "Welcome to Home Page" ) );

server.get( "/about", (req, res) => res.send( "Welcome to About Page" ) );

server.get( "/contactus", (req, res) => res.send( "Welcome to Contactus Page" ) );

// server.post();
// server.put();
// server.delete();

const port = process.env.port || 1000;
server.listen( 1000, () => console.log( "Server listening ", port ) );  //lambda function

// const f1 = () => console.log("f1");
// f1();
// (() => console.log("f1")) (); //self callable lambda