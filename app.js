'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

app.on('window-all-closed', function() { if (process.platform != 'darwin') { app.quit(); } });

function createWindow () {
  let  mainWindow = new BrowserWindow({width: 1600, height: 1000});
  Menu.setApplicationMenu(null)
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
  // or   mainWindow.loadURL('http://localhost:8080/index.html');

  mainWindow.on('closed', (() => mainWindow = null ));
};

app.on('ready', createWindow);
app.on('window-all-closed', function () { if (process.platform !== 'darwin') { app.quit() } })
app.on('activate', function () { if (mainWindow === null) { createWindow() } })
