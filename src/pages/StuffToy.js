import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import nailong from '../asset/nailong-flower.jpg';
import '../styles/StuffToy.css';
import '../App.css';


const initialMaze = [
  ["W", "W", "W", "W", "W", "W", "W"],
  ["W", "S", " ", "W", " ", " ", "W"],
  ["W", "W", " ", "W", " ", "W", "W"],
  ["W", " ", " ", " ", " ", " ", "W"],
  ["W", " ", "W", "W", "W", " ", "W"],
  ["W", " ", " ", " ", " ", "T", "W"],
  ["W", "W", "W", "W", "W", "W", "W"],
];

const findStart = (maze) => {
  for (let r = 0; r < maze.length; r++) {
    for (let c = 0; c < maze[r].length; c++) {
      if (maze[r][c] === "S") return { row: r, col: c };
    }
  }
  return { row: 1, col: 1 };
};

export default function StuffToy() {
  const navigate = useNavigate();
  const startPos = findStart(initialMaze);
  const [maze] = useState(initialMaze);
  const [playerPos, setPlayerPos] = useState(startPos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movePlayer = useCallback(
    (dir) => {
      let { row, col } = playerPos;

      if (dir === "Up") row--;
      if (dir === "Down") row++;
      if (dir === "Left") col--;
      if (dir === "Right") col++;

      if (
        row >= 0 &&
        row < maze.length &&
        col >= 0 &&
        col < maze[0].length &&
        maze[row][col] !== "W"
      ) {
        if (maze[row][col] === "T") setIsModalOpen(true);
        setPlayerPos({ row, col });
      }
    },
    [playerPos, maze]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (isModalOpen) return;

      if (e.key === "ArrowUp" || e.key === "w") movePlayer("Up");
      if (e.key === "ArrowDown" || e.key === "s") movePlayer("Down");
      if (e.key === "ArrowLeft" || e.key === "a") movePlayer("Left");
      if (e.key === "ArrowRight" || e.key === "d") movePlayer("Right");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [movePlayer, isModalOpen]);

  return (
    <div className="maze-container">

      <button className="back-button" onClick={() => navigate("/gifts")}>
            Back to Gifts
          </button>
      <h1>The Stuff Toy Maze Adventure</h1>
      <p>Use Arrow Keys or WASD to move the 🐾 to the Target 🎯</p>

      <div className="maze-grid">
        {maze.map((row, rIndex) => (
          <div key={rIndex} className="maze-row">
            {row.map((cell, cIndex) => {
              const isPlayer =
                playerPos.row === rIndex && playerPos.col === cIndex;

              let className = "cell";
              let content = "";

              if (cell === "W") className += " wall";
              if (cell === "T") {
                className += " target";
                content = "🎯";
              }
              if (cell === "S") {
                className += " start";
                content = "🚪";
              }
              if (isPlayer) {
                className += " player";
                content = "🐾";
              }

              return (
                <div key={cIndex} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="stuff-modal-content">

            <h2>Congratulations!</h2>
            <p>You found your stuffed toy!</p>

            <img 
              src={nailong}
              alt="Stuff Toy"
              className="modal-toy"
            />

            <button
              onClick={() => {
                setPlayerPos(findStart(initialMaze));
                setIsModalOpen(false);
              }}
            >
              Play Again
            </button>

          </div>
        </div>
      )}


      <div className="controls">
        <button onClick={() => movePlayer("Up")}>Up</button>
        <div>
          <button onClick={() => movePlayer("Left")}>Left</button>
          <button onClick={() => movePlayer("Right")}>Right</button>
        </div>
        <button onClick={() => movePlayer("Down")}>Down</button>
      </div>
    </div>
  );
}
