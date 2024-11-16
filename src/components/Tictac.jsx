import React, { useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import { FaRegCircle } from 'react-icons/fa';

function Tictactoe() {
  const [tic, settic] = useState(1);
  const [array, setarray] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [will,setwill]=useState(false)

  useEffect(() => {
    checkWinner();
    if(will){
        restartGame()
    }
  }, [array,will]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        setWinner(array[a]);
        setTimeout(() => alert(`Player ${array[a]} wins!`), 100);
        setwill(true)
        return
    
      }
    
    }
  };

  const handleClick = (index) => {
    if (array[index] || winner) return;

    const newArray = array.slice();
    newArray[index] = tic;
    setarray(newArray);
    settic(tic === 1 ? 2 : 1);
  };

  const restartGame = () => {
    setarray(Array(9).fill(null));
    settic(1);
    setWinner(null);
    setwill(false)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-2 w-60 h-60">
        {Array(9).fill(null).map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="bg-white border-2 border-gray-300 flex items-center justify-center cursor-pointer"
          >
            {array[index] === 1 && <ImCross className="text-4xl text-blue-500" />}
            {array[index] === 2 && <FaRegCircle className="text-4xl text-red-500" />}
          </div>
        ))}
      </div>
      <button
        onClick={restartGame}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Restart Game
      </button>
    </div>
  );
}

export default Tictactoe;
