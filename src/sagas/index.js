import axios from 'axios';
import { fork, take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

const x = undefined;

export function* handleActions() {
  while (typeof x === 'undefined') {
    const action = yield take(actions.SELECT_PAGE);
    yield put(actions.selectPage({ selectedPage: action.payload }));
  }
}

let prevState = false;

export function scrollChannel() {
  return eventChannel(emit => {
    const change = () => {
      if (window.scrollY < 300) {
        if (prevState === true) emit(false);
        prevState = false;
      } else {
        if (prevState === false) emit(true);
        prevState = true;
      }
    };
    window.addEventListener('scroll', change, false);
    return () => window.removeEventListener('scroll', change);
  });
}

const activitiesURL = 'https://raw.githubusercontent.com/MaxMEllon/portfolio-dev/master/json/activities.json';

function fetchActivities() {
  return axios.get(activitiesURL);
}

export function* handleFetchActivities() {
  while (typeof x === 'undefined') {
    yield take(actions.FETCH_ACTIVITIES);
    const activities = yield call(fetchActivities);
    yield put(actions.fetchActivities(activities));
  }
}

export function* handleScrollActions() {
  const channel = yield call(scrollChannel);
  while (typeof x === 'undefined') {
    const action = yield take(channel);
    yield put(actions.scrollAction(action));
  }
}

export default function* rootSaga() {
  yield fork(handleActions);
  yield fork(handleScrollActions);
  yield fork(handleFetchActivities);
}
