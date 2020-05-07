import React, { Fragment, useContext, useEffect } from 'react';
import GameContext from '../context/game/gameContext';
import GameInstructions from './GameInstructions';
import GameTurns from './GameTurns';
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
			<div className="game">
				<div className="row gameBoard">
					<h1 className="game-header blue-grey darken-4 center">Memory Card Game</h1>
					<GameInstructions />
					<GameTurns />
					{ cards === null ? null : cards.map(card => (
		        <GameCard
		        	key={card.id}
		        	card={card} />
		      ))}
		      <button 
		      	onClick={setCards}
		      	className="col s12 waves-effect waves-light blue-grey darken-1 btn-large reset-game">Reset Game</button>
				</div>
			</div>
		</Fragment>
	);
}

export default Game;