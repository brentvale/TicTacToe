var Game = function(options){
  this.playerOne = "X";
  this.playerTwo = "O";
  this.currentTurn = null;
  this.board = new Board({board: options.board});
  this.startGame();
}

Game.prototype = {
  addEventListeners: function(){
    var that = this;
    $("#main div div").on("click", function(event){
      var classNum = parseInt($(event.currentTarget).attr("class").slice(-1));
      if(that.board.isValidMove(classNum)){
        that.board.setCurrentTurn(that.currentTurn);
        that.board.addMove(classNum);
      
        $(event.currentTarget).html(that.currentTurn);
        that.togglePlayerTurn();
      }
    });
  },
  resetGame: function(){
    var $board = $("#main");
    var tiles = $board.find("[class*='tile-']");
    for(var i = 0; i < tiles.length; i ++){
      $(tiles[i]).html("");
    }
    $("#main div div").off("click");
    this.board = new Board({board: $board});
    this.startGame();
  },
  startGame: function(){
    this.addEventListeners();
    this.currentTurn = this.playerOne;
    this.board.currentTurn = this.playerOne;
  },
  togglePlayerTurn: function(){
    var playerHasWon = this.board.currentPlayerWon();
    var gameIsOverDraw = this.board.gameOverInDraw();
    if(playerHasWon){
      alert(this.currentTurn + " has Won the game!")
      this.resetGame();
    } else if(gameIsOverDraw){
      alert("Game is over.  You tied.  Lame.")
      this.resetGame();
    } else {
      this.currentTurn = (this.currentTurn == this.playerOne) ? this.playerTwo : this.playerOne;
    }
  }
}