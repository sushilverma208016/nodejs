
const express = require("express");

const server = express(); 

// setting the view engine for HTML generation
server.set('view engine', 'vash');
// middleware: to intercept all requests coming to server
// server.use( (req, res, next) => setTimeout( () => next(), 2000 ) );

server.get( "/", (req, res) => res.send( "Home Page" ) );

server.get( "/books", (req, res) => {
    const books = [];
    books.push( { title: "T1", author: "A1" } );
    books.push( { title: "T2", author: "A2" } );  
    books.push( { title: "T3", author: "A3" } );
    // res.send( books ); 
    // default: JS objects in server memory are converted JSON formaated string
    // JSON serialization

    // Converting JS objects to HTML
    // let str = "<table border='1' cellpadding='20', cellspacing='0' >";
    // str += "<tr> <th> Title </th> <th> Author </th> </tr>";
    // for (let book of books) {
        // str += "<tr>";
        // str += "<td>" + book.title + "</td>";
        // str += "<td>" + book.author + "</td>";
        // str += "</tr>";
    // }
    // str += "</table>";
    // res.send( str ); // will be send as normal string

    res.render('booksview', { books: books } );

} );

server.get( "/test", (req, res) => {
    const questions = [];
    questions.push( { statement: "AAA", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "BBB", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "CCC", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "DDD", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "EEE", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    
    res.render ("testview", { questions: questions } );
} );

const port = process.env.port || 1000;
server.listen( 1000, () => console.log( "Server listening ", port ) );
