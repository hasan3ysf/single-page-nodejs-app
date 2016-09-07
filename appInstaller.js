"use strict";
// https://github.com/electron/windows-installer

var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './app/Workspace/myApp-win32-x64', // './app',
    outputDirectory: './app/setup',
    authors: 'Hasan Yousef',
    exe: 'myApp.exe',
    description: 'test description',
    setupExe: 'myApp.exe',
    version: '0.1.0'
//    noMsi: false,
  });

resultPromise.then(() => console.log("Setup file created successfully!"), (e) => console.log(`Sorry, error: ${e.message}`));