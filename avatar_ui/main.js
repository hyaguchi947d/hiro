const {app, BrowserWindow} = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 720,
        height: 900,
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: true,
        toobar: false,
        //backgroundColor: '00000000',
        // opacity: 0.3,
        // webPreferences: {
        //     nodeIntegration: true
        // }
    })
    win.loadURL('http://localhost:3000/index.html');
}
app.on('ready', () => setTimeout(createWindow, 300));
