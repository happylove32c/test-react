import React, { useEffect, useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinningMessage(null);
  };
  
  

  const message = "It is " + go + "'s go";

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    winningCombos.forEach(array => {
      const circleWins = array.every(cell => cells[cell] === "circle");
      if (circleWins) {
        setWinningMessage("Circle wins!");
        return;
      }
    });

    winningCombos.forEach(array => {
      const crossWins = array.every(cell => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross wins!");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell 
            key={index} 
            index={index} 
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <a href="" className="reset-button">Reset Game</a>
    </div>
  );
};

export default App;
