
const express = require("express");
const sql = require("./sqllib");

const server = express(); 

server.set('view engine', 'vash');

server.get( "/", (req, res) => res.render( "homeview" ) );

server.get ( "/books", async (req, res) =>  {
    try {
        await sql.connectAsync();
        let books = await sql.queryAsync("select * from books");
        res.render('booksview', { books : books });
    } catch (e) {
        console.log(e.message);
    } finally {
        sql.close();
    }
}) ;

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
