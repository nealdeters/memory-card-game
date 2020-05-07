import React, { Fragment }from 'react';

const GameInstructions = () => {
	return (
		<Fragment>
			<p className="center">
				Select from the 24 available options. If you select two cards with the same value, they will be cleared from the board. Try to clear the board in as few turns as possible. 
			</p>
		</Fragment>
	);
}

export default GameInstructions;