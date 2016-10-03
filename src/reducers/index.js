import _ from 'lodash';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const initalState = {
  selectedPage: '',
  enableScroll: false,
  activities: {},
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
      return state;
  }
}

function activitiyReducer(state = initalState.activities, { type, payload }) {
  switch (type) {
    case actions.FETCH_ACTIVITIES:
      return { activities: _.get(payload, 'data.activities', null) };
    default:
      return state;
  }
}

export default combineReducers(
  {
    indexReducer,
    scrollReducer,
    activitiyReducer,
  }
);
