# -Backend-2-player-tic-tac-toe
httpsgithub.comShreyashyadav0-Backend-2-player-tic-tac-toe.git

today we are going to create the tic tac toe we will have three scenerios where a person can win 1- Through both the diagonals and stright lines 2- when we reach the scenerio where no perosn can win call it drow and restart the game.\

over we ejs and socket.io because it is 2 player game.
In index.ejs we have botton clicking on which we will create board with id create a board.
In CreateBoard variable we are redirecting it to /uuid
//creating unique id by uuid and rediricting the route
app.get("/uuid", (req, res) => {
    res.redirect("/" + uuidv4());
});

when we do not use var const let object become global variable and we can use it anywhere.
bhaj govid bhaj govind bhaj govind 
