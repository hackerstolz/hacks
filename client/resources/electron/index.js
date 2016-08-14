'use strict';

const electron = require('electron');
const { app, globalShortcut, BrowserWindow } = electron;

let mainWindow;

app.on('window-all-closed', () => {
    //https://github.com/atom/electron/issues/2312
    app.quit();
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: `${app.getName()} ${app.getVersion()}`,
        width: 1024,
        minWidth: 768,
        height: 700,
        titleBarStyle: 'hidden'
    });


    globalShortcut.register('CmdOrCtrl+Shift+d', function () {
        mainWindow.webContents.toggleDevTools();
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.setTitle(app.getName());

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
