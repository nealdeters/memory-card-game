import {
  SET_CARDS,
  SET_SELECTED_CARD,
  SET_COMPARING,
  SET_COUNTER,
  ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case SET_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.payload,
        counter: state.counter++,
        comparing: false
      };
    case SET_COMPARING:
      return {
        ...state,
        comparing: true
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: action.payload
      };
    default:
      return state;
  }
};