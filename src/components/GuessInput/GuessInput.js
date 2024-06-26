import React from 'react';

function UserGuess({ updateUserGuesses, gameWinning }) {
	let [guess, setGuess] = React.useState('');

	let handleSubmit = (e) => {
		e.preventDefault();
		updateUserGuesses(guess);
		setGuess('');
	};

	let handleOnChange = (e) => {
		let upperCaseChar = e.target.value.toUpperCase();
		setGuess(upperCaseChar);
	};

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input id='guess-input' type='text' value={guess} onChange={handleOnChange} pattern='[A-Z]{5}' disabled={gameWinning !== null} />
		</form>
	);
}

export default UserGuess;
