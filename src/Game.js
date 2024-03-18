import React, { useState } from 'react';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('It\'s a tie!');
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handlePlayerChoice('rock')}>Rock</button>
        <button onClick={() => handlePlayerChoice('paper')}>Paper</button>
        <button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Your choice: {playerChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
