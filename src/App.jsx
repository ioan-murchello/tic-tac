import { useState } from 'react'; 
import Player from './components/Player';
import GameOver from './components/GameOver';

import { WINNING_COMBINATIONS } from './winning_combination';

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const derrivePlayer = (turns) => {
  let currentPlayer = 'x';
  if (turns.length > 0 && turns[0].player === 'x') {
    currentPlayer = 'o';
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [player, setActivePlayer] = useState({
    x: 'Player 1',
    o: 'Player 2',
  });

  const handlePlayerName = (symbol, newName) => {
    setActivePlayer((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  };
  const activePlayer = derrivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((el) => [...el])];

  let winner;


  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for(let combination of WINNING_COMBINATIONS){
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];

    console.log(firstSquare,secondSquare,thirdSquare)

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = player[firstSquare] 
    }
  }


  const handleSelectSqueare = (rowIndex, colIndex) => { 
    setGameTurns((prev) => {
      const currentPlayer = derrivePlayer(prev);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([])
  }

  let hasDraw = gameTurns.length === 9 && !winner;

 

  return (
    <>
      <div className='layer'></div>
      <div className=' glass flex gap-y-20 flex-col justify-center items-center h-screen'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 font-["Montserrat"]'>
          <Player
            name='Player1'
            onChangeName={handlePlayerName}
            symbol='x'
            active={activePlayer === 'x'}
          />
          <Player
            name='Player2'
            symbol='o'
            onChangeName={handlePlayerName}
            active={activePlayer === 'o'}
          />
        </div>
        <ol className='flex flex-col justify-center gap-2 my-3'>
          {gameBoard.map((el, rowIndex) => {
            return (
              <li key={rowIndex}>
                <ol className='flex gap-3'>
                  {el.map((item, colIndex) => {
                    return (
                      <li key={colIndex}>
                        <button
                          className='w-20 h-20 sm:w-40 sm:h-40 flex capitalize justify-center items-center bg-black/70 text-2xl sm:text-5xl text-white cursor-pointer'
                          disabled={item !== null || winner}
                          onClick={() =>
                            handleSelectSqueare(rowIndex, colIndex)
                          }
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ol>
      </div>

      {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart}/>}
    </>
  );
}

export default App;
