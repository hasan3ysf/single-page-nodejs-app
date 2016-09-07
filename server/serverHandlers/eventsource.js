/*\       
|*|  EvenSource Server / Server-Sent Events (SSE)
\*/
var EventSource = require('faye-websocket').EventSource
var getInv      = require("../modules/getInv.js")

exports.handleReq = function (req, res, path) {
       es   = new EventSource(req, res, { headers: { 'Access-Control-Allow-Origin': '*' } } );
       getInv.start()
       console.log(path);
       switch (path){
           case "/getinv": 
                getInv.data(es)
                break
           default: 
                console.log('wrong event')
                break
        }
}
