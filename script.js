//game board 
function Gameboard () {
    const row =3;
    const column = 3; 
    const board = [];

    for (let i=0; i< row; i++ ){
        board[i] = [];
        for (let j=0; j<column; j++) {
            board[i].push(Cell())
        }
    }

    const getBoard = () => board

    const putToken = (row, column, player) => {
        if (row < 0 || row > 2 || column < 0 || column > 2) return;
        if (board[row][column].getValue() !== 0 ) return;
        
        {board[row][column].addToken(player)
    }
    }

    const printBoard = () => {
        const boardWithCellValues = board.map ((row) => row.map((Cell) => Cell.getValue()));
        console.log(boardWithCellValues)
    }

    return {getBoard, putToken, printBoard}
}


// to get value of cell 
getValue ()

// to add player token 1 or 2 into cell
addToken ()