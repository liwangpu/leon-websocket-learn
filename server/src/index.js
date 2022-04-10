const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', ws => {
    // onConnection(ws);
    console.log('connected');
    ws.send('你已经连接上服务器了哦!');
    ws.on('message', message => {
        console.log('received: %s', message);
        ws.send('服务器收到消息');
    });
    ws.on('error', error => {
        console.log('error:', error);
    });
    ws.on('close', ws => {
        console.log('closed');
    })
});