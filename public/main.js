
var socket = io();
function a() {
    socket.emit('privatechatroom', { email: document.getElementById('user_email').value });
}
function b() {
    socket.emit('sendmail', { email: document.getElementById('sender_mail').value, message: document.getElementById('message').value });
    $('#message').val('');
}
socket.on('new_msg', function(res){
    $('#messages').append($('<li>').text(res.msg));
    window.scrollTo(0, document.body.scrollHeight);
  });