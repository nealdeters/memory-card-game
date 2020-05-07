import React, { useContext } from 'react';
import GameContext from '../context/game/gameContext';

const GameCard = ({ card }) => {
	const gameContext = useContext(GameContext);
	const { comparing, selectCard } = gameContext;

	return (
		<div className={`col s3 ${card.flipped && card.cleared === false ? 'card-front' : 'card-back' } ${card.cleared === true ? 'card-cleared' : ''}`}
			onClick={ () => {
				if(!comparing){
					selectCard(card)
				}
			}}>{card.value}</div>
	);
}

export default GameCard;