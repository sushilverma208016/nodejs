
const express = require("express");
const sql = require("./sqllib");

const server = express(); 

server.use ( express.static( __dirname+"/client" ) );

const books = require( "./books" );
const test = require( "./test" );

server.set('view engine', 'vash');

server.use( "/books", books );
server.use( "/test", test );

server.get( "/", (req, res) => res.render( "homeview" ) );

server.get( "/products", (req, res) => {
    setTimeout ( () => {
        res.send( "Products" );
    } , 3000);
} );

const port = process.env.port || 1000;
server.listen( 1000, () => console.log( "Server listening ", port ) );
