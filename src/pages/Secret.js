import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/Secret.css";
import "../App.css";

// --- Game Configuration ---
const SECRET_PHRASE = "WILL YOU BE MY GIRLFRIEND";
const MAX_INCORRECT_GUESSES = 6;
// --------------------------

// Utility function to get unique letters from the phrase (excluding spaces)
const getUniqueLetters = (phrase) => {
  return new Set(phrase.toUpperCase().replace(/[^A-Z]/g, '').split(''));
};

export default function SecretHangmanGame() {
  const navigate = useNavigate();
  const phraseLetters = getUniqueLetters(SECRET_PHRASE);
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameState, setGameState] = useState('playing'); // 'playing', 'won', 'lost'

  const handleRestart = () => {
    setGuessedLetters(new Set());
    setIncorrectGuesses(0);
    setGameState('playing');
    console.log("Game Restarted.");
  };

  // Memoize the board display logic
  const getDisplayPhrase = useCallback(() => {
    return SECRET_PHRASE.split('').map((char, index) => {
      const upperChar = char.toUpperCase();
      if (upperChar === ' ') {
        return <span key={index} className="phrase-space">&nbsp;</span>; // Keep spaces visible
      } else if (guessedLetters.has(upperChar)) {
        return <span key={index} className="phrase-letter guessed">{upperChar}</span>;
      } else {
        return <span key={index} className="phrase-letter hidden">_</span>;
      }
    });
  }, [guessedLetters]);

  // Check if the game is won or lost
  useEffect(() => {
    if (gameState !== 'playing') return;

    const allGuessed = [...phraseLetters].every(letter => guessedLetters.has(letter));
    if (allGuessed) {
      setGameState('won');
    } 
    
    else if (incorrectGuesses >= MAX_INCORRECT_GUESSES) {
      setGameState('lost'); // Set state to 'lost' first to show the message
      
      // Delay the actual restart so the user sees the 'lost' message briefly
      const timer = setTimeout(() => {
        handleRestart(); 
      }, 3000); // Restarts after 3 seconds
      
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [guessedLetters, incorrectGuesses, gameState, phraseLetters]);

  // Handle a letter guess
  const handleGuess = (letter) => {
    if (gameState !== 'playing' || guessedLetters.has(letter)) {
      return;
    }

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!phraseLetters.has(letter)) {
      setIncorrectGuesses(prev => prev + 1);
    }
  };

  // Generate the clickable alphabet keyboard
  const renderKeyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((letter) => {
      const isGuessed = guessedLetters.has(letter);
      const isIncorrect = isGuessed && !phraseLetters.has(letter);
      
      let className = 'key';
      if (isGuessed) {
        className += isIncorrect ? ' incorrect' : ' correct';
      }

      return (
        <button
          key={letter}
          className={className}
          onClick={() => handleGuess(letter)}
          disabled={isGuessed || gameState !== 'playing'}
        >
          {letter}
        </button>
      );
    });
  };

  const renderGameStatus = () => {
    if (gameState === 'won') {
      return (
        <div className="game-status won">
          🎉 **SUCCESS!** You unlocked the secret message:
          <div className="final-reveal">{SECRET_PHRASE} ?</div>
        </div>
      );
    } else if (gameState === 'lost') {
      return (
        <div className="game-status lost">
          💔 **FAILED!** 
          <div className="final-reveal"></div>
          <button onClick={handleRestart} className="restart-button">Play Again?</button>
        </div>
      );
    }
    return (
      <p>Incorrect Guesses Remaining: 
        <span className="remaining-count">
          {MAX_INCORRECT_GUESSES - incorrectGuesses}
        </span>
      </p>
    );
  };
  
  // Renders a simple emoji 'Hangman' visual
  const renderHangmanImage = () => {
    const stage = MAX_INCORRECT_GUESSES - incorrectGuesses;
    // Icons represent stages from 'Lost' (0) to 'Perfect' (6)
    const icons = ['💀', '😭', '😥', '😕', '🙂', '😁', '😍']; 
    // Return the icon corresponding to the number of remaining chances
    return <div className="hangman-visual">{icons[stage]}</div>;
  };

  return (
    // Use the requested "gift-page" class
    <div className="gift-page hangman-game">
      <button className="back-button" onClick={() => navigate("/gifts")}>
              Back to Gifts
            </button>

      <h1>Secret</h1>
      <p>Shh… Guess the hidden letters to reveal the surprise! 🤫</p>
      
      <div className="game-area">
        {renderHangmanImage()}
        
        <div className="phrase-display">
          {getDisplayPhrase()}
        </div>
        
        <div className="status-area">
          {renderGameStatus()}
        </div>
        
        <div className="keyboard">
          {renderKeyboard()}
        </div>
      </div>
    </div>
  );
}