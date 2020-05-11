// NxN solution
export class Sudoku {
  constructor(board) {
    this.board = board;
  }
  
  isValid(){
    const SIZE = this.board.length;
    const sqSIZE = Math.sqrt(SIZE)
    const OKAY = Array.from(Array(SIZE+1).keys()).slice(1).sort().join("");
    for (let i = 0; i < sqSIZE; i += sqSIZE) {
    const a = []
      for (let y = sqSIZE * i; y < sqSIZE * (i + 1); y += 1) {
        for (let x = sqSIZE * i; x < sqSIZE * (i + 1); x += 1) {
           a.push(this.board[y][x])
        }
      }
      if (a.sort().join("") !== OKAY) return false
    }
    return true;
  }
}