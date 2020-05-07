import {
  SET_CARDS,
  SET_SELECTED_CARD,
  SET_COMPARING,
  ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case SET_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.payload,
        comparing: false
      };
    case SET_COMPARING:
      return {
        ...state,
        comparing: true
      };
    default:
      return state;
  }
};