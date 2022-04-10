const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', ws => {
    // onConnection(ws);
    console.log('connected');
    ws.on('message', message => {
        console.log('received: %s', message);
    });
    ws.on('error', error => {
        console.log('error:', error);
    });
    ws.on('close', ws => {
        console.log('closed');
    })
});