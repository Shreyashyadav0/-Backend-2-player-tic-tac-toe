const express = requie('express');
const app= express();
const server = require('http').Server(app);
const io = require('socket.io')(server);



//middlewares
app.arguments(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

server.listen(3000, () =>{
    console.log
});