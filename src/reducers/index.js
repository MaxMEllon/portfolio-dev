import { combineReducers } from 'redux';
import * as actions from '../actions';

const initalState = {
  selectedPage: '',
  enableScroll: false,
};

function indexReducer(state = initalState, { type, payload }) {
  switch (type) {
    case actions.SELECT_PAGE:
      return { selectedPage: payload.selectedPage };
    default:
      return state;
  }
}

function scrollReducer(state = initalState.enableScroll, { type, payload }) {
  switch (type) {
    case actions.SCROLL_ACTION:
      return { enableScroll: payload };
    default:
      return { enableScroll: state };
  }
}

export default combineReducers(
  {
    indexReducer,
    scrollReducer,
  }
);
