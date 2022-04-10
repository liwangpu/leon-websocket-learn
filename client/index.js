var socket;

// window.onload = function () {
//     document.getElementById('btnSendMessage').addEventListener('click', sendMessage);
//     document.getElementById('btnCloseConnect').addEventListener('click', closeConnect);
//     socket = new WebSocket('ws://localhost:8081');

//     socket.addEventListener('open', function (event) {
//         socket.send('Hello Server!');
//     });
// }

$(function () {
    $('#btnSendMessage').click(sendMessage);
    $('#btnCloseConnect').click(closeConnect);

    socket = new WebSocket('ws://localhost:8081');

    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });
});

function sendMessage() {
    socket.send('hello');
}

function closeConnect() {

}