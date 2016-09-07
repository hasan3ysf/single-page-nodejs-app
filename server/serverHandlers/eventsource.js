/*\       
|*|  EvenSource Server / Server-Sent Events (SSE)
\*/
var EventSource = require('faye-websocket').EventSource
var getInv      = require("../modules/getInv.js")

exports.handleReq = function (req, res) {
       console.log('ess')
       var path = req.url,
       es   = new EventSource(req, res, { headers: { 'Access-Control-Allow-Origin': '*' } } );
       getInv.start()
       switch (path.indexOf("getinv")){
           case 1: 
                console.log('1')
                getInv.data(es)
                break
           default: 
                console.log('wrong event')
                break
        }
}
