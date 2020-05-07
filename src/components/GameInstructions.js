import React, { Fragment }from 'react';

const GameInstructions = () => {
	return (
		<Fragment>
			<p className="center">
				Select from the 24 available options.
			</p>
			<p className="center">
				If two cards are selected with the same value, they will be cleared from the board.
				Try to clear the board in as few turns as possible.
			</p>
		</Fragment>
	);
}

export default GameInstructions;