function exist(board, word) {
    const rowLen = board.length;
    const colLen = board[0].length;
  
    function backTrack(row, col, index) {
      if (index === word.length) return true;
      if (isOutOfBound(board, row, col)) return false;
      if (board[row][col] !== word[index]) return false;
  
      let temp = board[row][col];
      board[row][col] = "*";
  
      const found =
        backTrack(row + 1, col, index + 1) ||
        backTrack(row - 1, col, index + 1) ||
        backTrack(row, col + 1, index + 1) ||
        backTrack(row, col - 1, index + 1);
  
      board[row][col] = temp;
  
      return found;
    }
  
    for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < colLen; j++) {
        if (backTrack(i, j, 0)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  const isOutOfBound = (board, row, col) => {
    const isRowOutOfBound = row < 0 || board.length - 1 < row;
    const isColOutOfBound = col < 0 || board[0].length - 1 < col;
    return isRowOutOfBound || isColOutOfBound;
  };
  
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
  ];
  const word = "SEE";
  console.log(exist(board, word));
  