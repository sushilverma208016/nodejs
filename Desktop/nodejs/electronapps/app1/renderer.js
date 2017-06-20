let $ = require("./jquery.js");
let sql = require("./sqllib");

let fs = require("fs"); // node filesystem library

const url = 'localhost:27018/vmdb3'; // Connection URL
const monk = require('monk'); // load monk driver

let {dialog} = require("electron").remote; // IPC with main electron process

function add() {
    dialog.showOpenDialog ( filenames => {

    });

    let x = $("#x").val(); // title
    let y = $("#y").val(); // author
    // let result = Number(x) + Number(y);
    // document.getElementById("output").innerHTML = result;
    let book = { title: x, author: y }; // JSON.stringify()

    const db = monk(url); // either creates DB or get existing DB
    const collection = db.get('books'); // table that will contain JSON
    collection.insert([ book ])
        .then( ()=> db.close() );

}

function getBooksFromWebServer() {
    let xhr = new XMLHttpRequest();
    xhr.open ( "get", "http://localhost:3000/books", true );
    xhr.onload = function () {
        alert (xhr.responseText);
    };
    xhr.send(); // async request
}

function getBooksByJSON() {

    // Accessing Restful Endpoint
    let xhr = new XMLHttpRequest();
    xhr.open ( "get", "http://localhost:1000/books/json", true );
    xhr.onload = function () {
        // let books = JSON.parse( xhr.responseText );
        // let str = "<table class='table' ";
        // for (let book of books) {
        //     str += "<tr>";
        //     str += "<td>" + book.title + "</td>";
        //     str += "<td>" + book.author + "</td>";    
        //     str += "</tr>";               
        // }
        // str += "</table>";
        document.getElementById("output").innerHTML = xhr.responseText;
    };
    xhr.send(); // async request
}
async function getBooksFromMySql() {
    const books = await sql.executeQueryAsync( "select * from books" );
    let str = "<table class='table' ";
        for (let book of books) {
            str += "<tr>";
            str += "<td>" + book.title + "</td>";
            str += "<td>" + book.author + "</td>";    
            str += "</tr>";               
        }
    str += "</table>";
    document.getElementById("output").innerHTML = str;
}

function getBooksFromMongoDB() {
    const db = monk(url); // either creates DB or get existing DB
    const collection = db.get('books'); // table that will contain JSON
    collection.find()  
        .then( (books) => {
            let str = "<table class='table' ";
            for (let book of books) {
                str += "<tr>";
                str += "<td>" + book.title + "</td>";
                str += "<td>" + book.author + "</td>";    
                str += "</tr>";               
            }
            str += "</table>";
            document.getElementById("output").innerHTML = str;
        } )
        .then( () => db.close() );
}

// let month = new Date().getMonth() + 1; // 6
// console.log( month );
// let year = new Date().getFullYear(); // 2017
// console.log( year );
// let daysInMonth = new Date( year, month, 0 ).getDate(); // 30
// console.log( daysInMonth );
// let firstOfDayOfMonth = new Date (year, month-1, 1 ).getDay();
// console.log( firstOfDayOfMonth );
// let days = new Array(42);
// days.fill( 0 );

// for ( let i = firstOfDayOfMonth, day = 1; day <= daysInMonth; i++, day++ ) {
//     days[i] = day;
// }

// let html = "<div style='width: 350px;' >";
// for (let i=0; i<42; i++) {
//     if( days[i] != 0 )
//         html += "<div style='width: 50px; height: 50px; float: left;' >" + days[i] + "</div>";
//     else
//         html += "<div style='width: 50px; height: 50px; float: left;' > </div>";        
// }
// html += "</div>";

// document.getElementById("output").innerHTML = html;
