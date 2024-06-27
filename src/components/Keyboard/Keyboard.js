import React from 'react';
import { ALPHABET_SEQUENCES, AVAILABLE_COLOR_SCHEMES } from '../../constants';

function Keyboard({ userGuesses }) {
	let allUserGuesses = userGuesses.flat().reduce((acc, cur) => {
		let index = acc.findIndex((item) => item.letter === cur.letter);
		if (index === -1) {
			acc.push(cur);
		} else if (AVAILABLE_COLOR_SCHEMES.indexOf(cur.status) > AVAILABLE_COLOR_SCHEMES.indexOf(acc[index].status)) {
			acc[index].status = cur.status;
		}
		return acc;
	}, []);

	return (
		<div className='guess-results keyboard'>
			{ALPHABET_SEQUENCES.map((sequence) => {
				let chars = sequence.toUpperCase().split('');
				return (
					<p key={sequence} className='guess keyboard-row'>
						{chars.map((char) => {
							let charColorClass = allUserGuesses.reduce((acc, cur) => {
								if (cur.letter === char) {
									acc = cur.status;
								}
								return acc;
							}, '');
							return (
								<span className={`cell keyboard-cell ${charColorClass}`} key={char}>
									{char}
								</span>
							);
						})}
					</p>
				);
			})}
		</div>
	);
}

export default Keyboard;
