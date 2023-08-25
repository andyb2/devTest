export class Connect4 {
    gameGrid: [number[]];
    currentPlayer: number;
    playerOne: number;
    playerTwo: number;
    moveCount: number;
    winningPlayer: string;

    constructor() {
      this.gameGrid = this.createGrid();
      this.currentPlayer = 0;
      this.playerOne = 1;
      this.playerTwo = 2;
      this.moveCount = 0;
      this.winningPlayer;
    }
  
    private createGrid(): [number[]] {
        const grid: any = [];

        for (let i=0; i<6; i++) {
          grid.push([]);
          for (let j=0; j<7; j++) {
            grid[i].push(0);
          }
        }
        return grid;
    }

    play(col: number): string{
        if (this.winningPlayer) return 'Game has finished!';
    
        this.moveCount++;
        this.currentPlayersTurn();
        const conditionMet = this.updateGrid(col);
      
        if (conditionMet) return conditionMet;
        
        return `Player ${this.currentPlayer} has a turn`;
      }

    private updateGrid(col: number) {
      if (this.gameGrid[0][col] !== 0) {
        this.currentPlayersTurn();
        return 'Column full!';
      } 
      
      let row = 0;
      for (let i=0; i<6; i++) {
          if (this.gameGrid[i][col] === 0 && i !== 5) continue;
          else if (this.gameGrid[i][col] !== 0) {
            this.gameGrid[i-1][col] = this.currentPlayer;
            row = i-1;
            break;
          }
          else {
            this.gameGrid[i][col] = this.currentPlayer;
            row = i;
            break;
          }
        }

        if (this.moveCount > 6) return this.checkForWinner(col, row);
    }

    private currentPlayersTurn() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
        } else {
            this.currentPlayer = this.playerOne;
        }
      }

    private checkForWinner(col: number, row: number) {
        let pieceCounter = 0;
        const whoWon = `Player ${this.currentPlayer} wins!`;
        
        // check column for winner
        const winByColumn = this.checkWinnerByColumn(pieceCounter, whoWon, col);
        if (winByColumn) return winByColumn;
        
        // check row for winner
        const winByRow = this.checkWinnerByRow(pieceCounter, whoWon, row);
        if (winByRow) return winByRow;

        // calculate starting position of diagonal
        let topLeftX = row - Math.min(row, col)
        let topLeftY = col - Math.min(row, col);
        let topRightY = row + Math.min(6 - row, col);
        let topRightX = col - Math.min(6 - row, col);
        const left = 'left';
        const right = 'right';

        // check diagnols
        const winByLeftDiag = this.checkWinnerByDiagonal(pieceCounter, topLeftX, topLeftY, whoWon, left);
        if (winByLeftDiag) return winByLeftDiag;
      
        const winByRightDiag = this.checkWinnerByDiagonal(pieceCounter, topRightX, topRightY, whoWon, right);
        if (winByRightDiag) return winByRightDiag;   
    }

    private checkWinnerByColumn(pieceCounter: number, whoWon: string, col: number) {
        for (let i=0; i<6; i++) { 
            if (this.currentPlayer === this.gameGrid[i][col]) pieceCounter++;
            else pieceCounter = 0;

            if (pieceCounter === 4) {
              this.winningPlayer = whoWon;
              return whoWon;
            }
        }
        pieceCounter = 0;
    }

    private checkWinnerByRow(pieceCounter: number, whoWon: string, row: number) {
        for (let i=0; i<7; i++) {
            if (this.currentPlayer === this.gameGrid[row][i]) pieceCounter++;
            else pieceCounter = 0;

            if (pieceCounter === 4) {
              this.winningPlayer = whoWon;
              return whoWon;
            }
        }
        pieceCounter = 0;
    }

    private checkWinnerByDiagonal(pieceCounter: number, x: number, y: number, whoWon: string, direction: string) {
        for (let i=0; i<6; i++) {
            if (x >  5 || y > 6 || x < 0 || y < 0) break;
            const gridPosition = this.gameGrid[x][y];

            if (gridPosition === this.currentPlayer) {
              pieceCounter++;
            }
            else pieceCounter = 0;

            if (pieceCounter === 4) {
              
              this.winningPlayer = whoWon;
              return whoWon;
            }
            x++;
            direction === 'left' ? y++ : y--;
        }
        pieceCounter = 0;
    }
  }

// Connect 4

// **Task**  
// The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down,
// occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
// Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

// **Rules**  
// If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

// If a player attempts to place a disc in a column that is full then you should return "Column full!" and the next move must be taken by the same player.

// If the game has been won by a player, any following moves should return ”Game has finished!”.

// Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.

// Player 1 starts the game every time and alternates with player 2.

// The columns are numbered 0-6 left to right.
 
// Good luck and enjoy!