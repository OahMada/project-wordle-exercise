import React from 'react';
import Guess from '../Guess';

function UserGuesses({ userGuesses }) {
	let arrOfLength6 = Array.from({ length: 6 }, (v, i) => i);

	return (
		<div className='guess-results'>
			{arrOfLength6.map((value) => {
				return <Guess key={value} guess={userGuesses[value]} />;
			})}
		</div>
	);
}

export default UserGuesses;
