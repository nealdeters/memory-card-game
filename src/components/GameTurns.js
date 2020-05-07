import React, { Fragment, useContext } from 'react';
import GameContext from '../context/game/gameContext';

const GameTurns = () => {
	const gameContext = useContext(GameContext);
	const { counter } = gameContext;

	return (
		<Fragment>
			<h2 className="game-turns center blue-grey darken-3">Turns: {counter}</h2>
		</Fragment>
	);
}

export default GameTurns;