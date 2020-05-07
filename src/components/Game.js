import React, { Fragment, useContext, useEffect } from 'react';
import GameContext from '../context/game/gameContext';
import GameCard from './GameCard';

const Game = () => {
	const gameContext = useContext(GameContext);
	const { cards, setCards } = gameContext;

	useEffect(() => {
		if(cards === null){
			setCards();
		}

		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="row gameBoard">
					<h1 className="game-header">Memory Card Game</h1>
					{ cards === null ? null : cards.map(card => (
		        <GameCard
		        	key={card.id}
		        	card={card} />
		      ))}
				</div>
			</div>
		</Fragment>
	);
}

export default Game;