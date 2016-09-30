var Board = function(){
  this.grid = [["-", "-", "-"],["-","-","-"],["-","-","-"]];
  this.currentTurn = null;
  this.gridToArray = {1: [0,0],
                      2: [0,1],
                      3: [0,2],
                      4: [1,0],
                      5: [1,1],
                      6: [1,2],
                      7: [2,0],
                      8: [2,1],
                      9: [2,2]};
};

Board.prototype = {
  addMove: function(num){                
    var indeces = this.gridToArray[num];
    this.grid[indeces[0]][indeces[1]] = this.currentTurn;
  },
  currentPlayerWon: function(){
    //playerValue "X" or "O"
    
    //loop captures win for 3 across
    for(var i = 0; i < 3; i++){
      var allSame = true;
      for(var j =0; j < 3; j++ ){
        if(this.grid[i][j] !== this.currentTurn){
          allSame = false;
        }
      }
      if(allSame){
        return true;
      }
    }
    
    //capture win for 3 down
    for(var i = 0; i < 3; i++){
      var allSame = true;
      for(var j =0; j < 3; j++ ){
        if(this.grid[j][i] !== this.currentTurn){
          allSame = false;
        }
      }
      if(allSame){
        return true;
      }
    }
    
    //capture win for 2 diagonals
    var diagOne = [[0,0], [1,1], [2,2]];
    var diagTwo = [[2,0], [1,1], [0,2]];
    
    var diagOneSame = true;
    for(var i = 0; i < 3; i ++){
      if(this.grid[diagOne[i][0]][diagOne[i][1]] !== this.currentTurn){
        diagOneSame = false;
      }
    }
    if(diagOneSame){
      return true;
    }
    
    var diagTwoSame = true;
    for(var i = 0; i < 3; i ++){
      if(this.grid[diagTwo[i][0]][diagTwo[i][1]] !== this.currentTurn){
        diagTwoSame = false;
      }
    }
    if(diagTwoSame){
      return true;
    }
    
    return false;
  },
  gameOverInDraw: function(){
    var draw = true;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if(this.grid[i][j] == "-"){
          draw = false;
        }
      }
    }
    return draw;
  },
  isValidMove: function(num){
    var indeces = this.gridToArray[num];
    if(this.grid[indeces[0]][indeces[1]] == "-"){
      return true
    } else {
      return false
    }
  },
  setCurrentTurn: function(turn){
    this.currentTurn = turn;
  }
  
}