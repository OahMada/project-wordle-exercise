import React from 'react';

function Guess({ guess = [] }) {
	let arrOfLength5 = Array.from({ length: 5 }, (v, i) => i);
	return (
		<p className='guess'>
			{arrOfLength5.map((value) => {
				let guessLetter = guess[value];
				return (
					<span className={guessLetter ? `cell ${guessLetter.status}` : 'cell'} key={value}>
						{guessLetter ? guessLetter.letter : ''}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
