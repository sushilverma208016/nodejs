const express = require("express");
const sql = require("./sqllib") ;

// create a new router object that has get, post, put, delete methods
const router = express.Router();

// serving HTML-endpoint
router.get ( "/", async (req, res) =>  {
    const books = await sql.executeQueryAsync("select * from books");
    res.render ( "booksview", { books : books }) ;
}) ;

// serving JSON-endpoint
router.get ( "/json", async (req, res) =>  {
    const books = await sql.executeQueryAsync("select * from books");
    res.json ( books ) ;
}) ;

module.exports = router;