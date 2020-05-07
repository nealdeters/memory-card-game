import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import cardsJson from '../../cards.json';
import M from "materialize-css/dist/js/materialize.min.js";

import {
  SET_CARDS,
  SET_SELECTED_CARD,
  SET_COMPARING,
  SET_COUNTER,
  ERROR
} from '../types';

const GameState = props => {
  const initialState = {
    cards: null,
    selectedCard: null,
    counter: 0,
    loading: null,
    comparing: false
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const _shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const _setCardsDispatch = (cards) => {
    dispatch({
      type: SET_CARDS,
      payload: cards
    });
  }

  const setCards = () => {
    const cards = _shuffle(cardsJson.map((card, index) => {
      card.flipped = false;
      card.cleared = false;
      return card;
    }));
    _setCardsDispatch(cards);
    dispatch({
      type: SET_COUNTER,
      payload: 0
    })
  }

  const insertSelected = (card1, card2) => {
    return state.cards.map(c => {
      if(c.id === card1.id){
        return card1;
      } else if(c.id === card2.id){
        return card2;
      } else {
        return c;
      }
    });
  }

  const selectCard = (card) => {
    card.flipped = true;

    let newCards = state.cards.map(c => {
      if(c.id === card.id){
        return card;
      } else {
        return c;
      }
    });

    _setCardsDispatch(newCards);

    if(state.selectedCard){
      setComparing();

      // delay the updates so the user can see the cards
      setTimeout(() => {
        const card1 = card;
        const card2 = state.selectedCard;
        if(_cardsAreEqual(card1, card2)){
          // clear cards
          card1.cleared = true;
          card2.cleared = true;
          newCards = insertSelected(card1, card2);
        } else {
          // flip cards
          card1.flipped = false;
          card2.flipped = false;
          newCards = insertSelected(card1, card2);
        }
        
        _setCardsDispatch(newCards);
        setSelectedCard(null);
        isGameFinished(newCards);
      }, 1000)
    } else {
      setSelectedCard(card);
    }
  }

  const _cardsAreEqual = (card1, card2) => {
    return card1.value === card2.value && card1.id !== card2.id;
  }

  const isGameFinished = (cards) => {
    const gameFinished = cards.every(card => {
      return card.cleared;
    });

    if(gameFinished){
      M.toast({html: `Congratulations, you cleared the board in ${state.counter + 1} turns!`});
    }
  }

  const setSelectedCard = (selectedCard) => {
    dispatch({
      type: SET_SELECTED_CARD,
      payload: selectedCard
    })
  }

  const setComparing = () => {
    dispatch({
      type: SET_COMPARING
    })
  }

  return (
    <GameContext.Provider
      value={{
        cards: state.cards,
        comparing: state.comparing,
        selectedCard: state.selectedCard,
        counter: state.counter,
        setCards,
        selectCard
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;