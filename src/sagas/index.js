import { fork, take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

export function* handleActions() {
  while (true) {
    const action = yield take(actions.SELECT_PAGE);
    yield put(actions.selectPage({ selectedPage: action.payload }));
  }
}

export function scrollChannel() {
  return eventChannel(emit => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        emit(false);
      } else {
        emit(true);
      }
    }, false);

    return () => { };
  });
}

export function* handleScrollActions() {
  const channel = yield call(scrollChannel);
  while (true) {
    const action = yield take(channel);
    yield put(actions.scrollAction(action));
  }
}

export default function* rootSaga() {
  yield fork(handleActions);
  yield fork(handleScrollActions);
}
