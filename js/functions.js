// General-purpose actions in the game.

Game.do = (function() {
  /**
   * A function for adding a disc to our Connect Four board state.
   *
   * @param number x_pos The x-position of the location chosen.
   * @param number y_pos The y-position of the location chosen.
   */
  function addDiscToBoard(x_pos, y_pos) {
    Game.board[y_pos][x_pos] = Game.currentPlayer;
  }

  /**
   * Print the contents of our Game.board state to the html page.
   */
  function printBoard() {
    var row, cell;
    for (var y = 0; y <= Game.config.boardHeight; y++) {
      for (var x = 0; x <= Game.config.boardLength; x++) {
        if (Game.check.isPositionTaken(x, y)) {
          row = document.querySelector('tr:nth-child(' + (1 + y) + ')');
          cell = row.querySelector('td:nth-child(' + (1 + x) + ')');
          cell.firstElementChild.classList.add(Game.board[y][x]);
       

        }
      }
    }
  }

  /**
   * A function for changing players both in state and on the screen.
   */
  function changePlayer() {
    var currentPlayerNameEl = document.querySelector('#current-player');
    var otherPlayerNameEl = document.querySelector('#other-player');

    // Switch players
    var otherPlayer = Game.currentPlayer
    var otherPlayerName = currentPlayerNameEl.textContent;
    var currentPlayerName = otherPlayerNameEl.textContent;
    
    Game.currentPlayer = (Game.currentPlayer === 'T') ? 'O' : 'T';


    // Update the players in the UI.
    currentPlayerNameEl.classList.remove(otherPlayer);
    
    currentPlayerNameEl.classList.add(Game.currentPlayer);


    
    currentPlayerNameEl.textContent = currentPlayerName;
    


    otherPlayerNameEl.classList.remove(Game.currentPlayer);
    otherPlayerNameEl.classList.add(otherPlayer);
    otherPlayerNameEl.textContent = otherPlayerName;
    


  }
 

  /**
   * If there are empty positions below the one chosen, return the new y-position
   * we should drop the piece to.
   *
   * @param number x_pos The x-position of the location chosen.
   * @param number y_pos The y-position of the location chosen.
   * @return number - The y-position the disc should fall into.
   */
  function dropToBottom(x_pos, y_pos) {
    // Start at the bottom of the column, and step up, checking to make sure
    // each position has been filled. If one hasn't, return the empty position.
    for (var y = Game.config.boardHeight; y > y_pos; y--) {
      if (!Game.check.isPositionTaken(x_pos, y)) {
        return y;
      }
    }
    return y_pos;
  }

  /**
   * Handle edge-cases in name changes
   * @param event
   */
  function handleNameChange(event) {
    // Prevent the default "newline" behavior when hitting "Enter"
    if (event.keyCode === 13) {
      event.preventDefault();
      document.body.focus();
    }
  }

  return {
    addDiscToBoard,
    printBoard,
    changePlayer,
    dropToBottom,
    handleNameChange
  };
})();



// General-purpose status checks for the game.

Game.check = (function() {
  function isPositionTaken(x_pos, y_pos) {
    return Game.board[y_pos][x_pos] !== 0;
  }

  
  function isGameADraw() {
    for (var y = 0; y <= Game.config.boardHeight; y++) {
      for (var x = 0; x <= Game.config.boardLength; x++) {
        if (!isPositionTaken(x, y)) {
          return false;
        }
      }
    }
    return true;
  }

  function isHorizontalWin() {
    var currentValue = null;

    for (var y = 0; y <= Game.config.boardHeight; y++) {
      for (var x = 0; x <= Game.config.boardLength; x++) {
        currentValue = Game.board[y][x] ;
        
if(Game.board[y][x]===currentValue && Game.board[y][x+1]!==currentValue  &&  Game.board[y][x+2]!==currentValue&&Game.board[y][x+3]===currentValue && currentValue!= 0  ){return true;}

    
      
    }
  }
    return false;
  }

  // function isVerticalWin() {
  //   var currentValue = null,
  //   previos=0;;

  //   for (var x = 0; x <= Game.config.boardLength; x++) {
  //     for (var y = 0; y <= Game.config.boardHeight; y++) {
  //       currentValue=Game.board[y][x];


      
  //   }
  // }
  //   return false;
  // }

 return {
   isPositionTaken,
   isGameADraw,
   isHorizontalWin,
  //  isVerticalWin,
 }

})();
