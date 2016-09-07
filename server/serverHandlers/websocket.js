var WebSocket = require('faye-websocket')

exports.handleReq = function (req, socket, head) {
        var ws = new WebSocket(req, socket, head, ['irc', 'xmpp']);
        ws.on('message', ((event) => console.log(event.data)))    //ws.send(event.data)));
        ws.on('close', ((event)   => ws = null))
        ws.send('Web socket server is ready')
}