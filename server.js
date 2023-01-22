const express = require('express');
const app= express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidv4} = require('uuid'); 



//middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

//routes
app.get("/",(req,res) =>{
   res.render('index');
});

//creating unique id by uuid and rediricting the route
app.get("/uuid", (req, res) => {
    res.redirect("/" + uuidv4());
})
//getting the id from req.params rendering ejs file
app.get("/:room", (req, res) => {
    res.render("room", {
        roomId: req.params.room
    });
})
server.listen(3000, () =>{
    console.log
});