// Create variables for use in our game.
var Game = {};

// Global game config
Game.config = {
  startingPlayer: "T", // Choose 'black' or 'red'.
  takenMsg: "This position is already taken. Please make another choice.",
  drawMsg: "This game is a draw.",
  winMsg: "The winner is: ",

  boardLength: 6,
  boardHeight: 5,
};

Game.board = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];

Game.currentPlayer = Game.config.startingPlayer;
