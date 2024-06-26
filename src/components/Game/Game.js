import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import UserGuesses from '../UserGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { GameLosingBanner, GameWinningBanner } from '../GameEndingBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function selectAnswer() {
	let answer = sample(WORDS);
	console.log(answer);
	return answer;
}

function Game() {
	let [answer, setAnswer] = React.useState(selectAnswer);
	let [userGuesses, setUserGuesses] = React.useState([]);
	let [gameWinning, setGameWinning] = React.useState(null);

	let updateUserGuesses = (newGuess) => {
		let result = checkGuess(newGuess, answer);

		let newGuesses = [...userGuesses, result];
		setUserGuesses(newGuesses);

		if (newGuess === answer) {
			setGameWinning(true);
		} else if (userGuesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
			setGameWinning(false);
		}
	};

	let restartGame = () => {
		setAnswer(selectAnswer);
		setUserGuesses([]);
		setGameWinning(null);
	};

	return (
		<>
			{gameWinning && <GameWinningBanner guessCount={userGuesses.length} restartGame={restartGame} />}
			{!gameWinning && gameWinning !== null && <GameLosingBanner answer={answer} restartGame={restartGame} />}
			<UserGuesses userGuesses={userGuesses} />
			<GuessInput updateUserGuesses={updateUserGuesses} gameWinning={gameWinning} />
			<Keyboard userGuesses={userGuesses} />
		</>
	);
}

export default Game;
