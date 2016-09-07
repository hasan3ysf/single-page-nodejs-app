"use strict";
// https://github.com/electron/windows-installer

var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './server/Workspace/myServer-win32-x64', // './app',
    outputDirectory: './server/setup',
    authors: 'Hasan Yousef',
    exe: 'myServer.exe',
    description: 'test description',
    setupExe: 'myServer.exe',
    version: '0.1.0'
//    noMsi: false,
  });

resultPromise.then(() => console.log("Setup file created successfully!"), (e) => console.log(`Sorry, error: ${e.message}`));