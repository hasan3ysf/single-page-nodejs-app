/*\       
|*|  EvenSource Server / Server-Sent Events (SSE)
\*/
var EventSource = require('faye-websocket').EventSource

exports.handleReq = function (req, res) {
       console.log('ess')
       var path = req.url,
       es   = new EventSource(req, res, { headers: { 'Access-Control-Allow-Origin': '*' } } );
       switch (path.indexOf("getinv")){
           case 1: 
                console.log('1')
                sse(es)
                break
           default: 
                console.log('wrong event')
                break
        }
}

sse = function (es) {
	if (es) es.send(JSON.stringify({'name':'Hasan'}), {event: 'name', id: (new Date()).toLocaleTimeString()})
}
