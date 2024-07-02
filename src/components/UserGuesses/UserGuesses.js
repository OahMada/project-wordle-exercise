import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function UserGuesses({ userGuesses }) {
	let arrOfLength6 = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (v, i) => i);

	return (
		<div className='guess-results'>
			{arrOfLength6.map((value) => {
				return <Guess key={value} guess={userGuesses[value]} />;
			})}
		</div>
	);
}

export default UserGuesses;
