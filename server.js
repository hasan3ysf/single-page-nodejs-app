'use strict';

const app = require('electron').app;  

function createServer () {
'use strict';
    var http      = require("http"),
        WebSocket = require('faye-websocket'),
        server    = http.createServer(),
        host      = '172.0.0.1',
        port      = process.argv[2] || 8080,
        headers   = {}

    var apiHandler    = require("./server/serverHandlers/api.js").handleReq,
        staticHandler = require("./server/serverHandlers/static.js").handleReq,
        essHandler    = require("./server/serverHandlers/eventsource.js").handleReq,
        wsHandler     = require("./server/serverHandlers/websocket.js").handleReq

    // increase pool size
    http.globalAgent.maxSockets = 20; // or whatever, max connections from the same client at the same time   

    var upgradeHandler = function(req, socket, head) {
        if (WebSocket.isWebSocket(req)) return wsHandler(req, socket, head)
    };    

    var requestHandler = function(req, res) {   
        if (req.method === "OPTIONS") {
            headers["Access-Control-Allow-Origin"] = "*"
            headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
            headers["Access-Control-Allow-Credentials"] = false
            headers["Access-Control-Max-Age"] = '86400' // 24 hours
            headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
            res.writeHead(200, headers)
            res.end()
       }    
       if (!WebSocket.EventSource.isEventSource(req))
           if (req.url.indexOf("api") === 1)
               return apiHandler(req, res)
           else
              return staticHandler(req, res) 
       else
             return essHandler(req, res);
    };

    var startServer = (() => console.log('Server Started @ ' + server.address().port))

    server.on('request', requestHandler)
    server.on('upgrade', upgradeHandler)
    server.listen(port, startServer)

}

app.on('ready', createServer);