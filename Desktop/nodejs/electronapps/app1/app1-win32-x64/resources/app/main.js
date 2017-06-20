
const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
    // open a chromium window
    win = new BrowserWindow({width: 800, height: 600});
    // will load the web page , our UI
    win.loadURL(url.format({
        protocol: 'file:', // file: local, http: web
        pathname: path.join(__dirname, 'index.html'),
        slashes: true
    }));
}

app.on('ready', createWindow);




// function fun() {
//     var a = { x: 10, y: 20, z: 30 };
//     return a;
// }
// let {x, z} = fun(); // object destructuring
// console.log( x, z );
// x = 90;
// console.log (x);