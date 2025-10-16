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

    // function to put a token in a specific cell
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

// cell
function Cell () {
    let value =0; 

    //function to put a token
    const addToken = (player) => {
        value = player
    }

    //return value of a cell
    const getValue = () => value;

    return {addToken, getValue}
} 

// game logic 
function GameController (playerOne, playerTwo) {
    
    const board = Gameboard();

    const players = [
        {name: playerOne, token: 1},
        {name: playerTwo, token: 2}
    ]

    let activePlayer = players[0];

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn'`)
    }

    const playRound = (row, column) => {
        console.log (`Dropping ${getActivePlayer().name}'s token into row${row} and column${column}`)

        board.putToken(row, column, getActivePlayer().token)

        //add check to winning conditon here
        //add winnign message 

        switchPlayer();
        printNewRound()
    }

    printNewRound();

    return {playRound, 
            getActivePlayer, 
            getBoard: board.getBoard
        }

}

const game = GameController("Alice", "Bob");

