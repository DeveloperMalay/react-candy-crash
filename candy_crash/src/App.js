import { useState, useEffect } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  //check the three candy has the same colour or not
  const checkForCandyofThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i * width, i * width * 2];
      const decideColor = currentColorArrangement[i];
      if (
        columnOfThree.every(
          (square) => currentColorArrangement[square] === decideColor
        )
      ) {
        columnOfThree.forEach((square) => currentColorArrangement[square]);
      }
    }
  };

  // creating the board of candy
  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="App">
      <div className="game">
        {currentColorArrangement.map((candyColors, index) => (
          <img
            key={index}
            style={{ backgroundColor: candyColors }}
            src=""
            alt={candyColors}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
