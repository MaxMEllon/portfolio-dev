import { combineReducers } from 'redux';
import * as actions from '../actions';

const initalState = {
  selectedPage: '',
};

function indexReducer(state = initalState, { type, payload }) {
  switch (type) {
    case actions.SELECT_PAGE:
      return { selectedPage: payload.selectedPage };
    default:
      return state;
  }
}

export default combineReducers(
  { indexReducer }
);
