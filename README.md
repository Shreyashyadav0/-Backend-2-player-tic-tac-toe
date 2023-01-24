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

So in our room.js
we have copied to clipboard fuction applied on the bottom where we get the url and select everything then we disabled on click and removed the selection.

then we joined the room with room id and when user is connected we say user is connected myclick becomes "X" otherClick = "0" enableClick =true; and emit can can-play.
after clicking we get the element by id we make the element.innnerHTML = myclick;
element.onclick= null;
socket.emit("clicked", id);
enableClick = false;( now we can not click)
then we have 7 lines of logic just check if we are winning or not;
if we win then innerhtml = You win and redirect it / in 2 sec otherwise if moves have become 9 then we send the message as It's drow and redirect it to /

then when other person clicks the we do vice versa of all these things.
on room full we can room full and on user - disconnected we have user disconnected.

on server we join our room we get out room with room = io.sockets.adapter.rooms.get(roomId); we get out room size with room size if room size is less then 1 all the things need to be done otherwise tell room is full.
and on click we can say this id has been clicked.
