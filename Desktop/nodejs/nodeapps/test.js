
const express = require("express");
//create a new router object that has get, post, put, delete methods
const router = express.Router();

router.get( "/", (req, res) => {
    const questions = [];
    questions.push( { statement: "AAA", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "BBB", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "CCC", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "DDD", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    questions.push( { statement: "EEE", op1: "A1", op2: "A2", op3: "A3", op4: "A4", answer: 1, marks: 5 } );
    
    res.render ("testview", { questions: questions } );
} );

module.exports = router;
