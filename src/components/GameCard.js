import React, { useContext } from 'react';
import GameContext from '../context/game/gameContext';

const GameCard = ({ card }) => {
	const gameContext = useContext(GameContext);
	const { comparing, selectCard } = gameContext;

	return (
		<div className={`game-card col s3 ${card.flipped && card.cleared === false ? 'card-front' : 'card-back' } ${card.cleared === true ? 'card-cleared' : ''}`}
			onClick={ () => {
				if(!comparing){
					selectCard(card)
				}
			}}
			zIndex="0"
			ariaLabel={card.flipped ? `Game Card Value of ${card.value}` : 'Game Card'}>{card.flipped === false ? null : card.value}</div>
	);
}

export default GameCard;