import React from 'react';

function GameWinningBanner({ guessCount, restartGame }) {
	return (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in <strong>{guessCount} guesses</strong>.
			</p>
			<button onClick={() => restartGame()}>RESTART</button>
		</div>
	);
}

function GameLosingBanner({ answer, restartGame }) {
	return (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
			<button onClick={() => restartGame()}>RESTART</button>
		</div>
	);
}

export { GameWinningBanner, GameLosingBanner };
