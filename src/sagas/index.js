import { fork, take, put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* handleActions() {
  while (true) {
    const action = yield take(actions.SELECT_PAGE);
    console.info(action);
    yield put(actions.selectPage({ selectedPage: action.payload }));
  }
}

export default function* rootSaga() {
  yield fork(handleActions);
}
