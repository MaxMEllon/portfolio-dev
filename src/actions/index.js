import { createAction } from 'redux-act';

export const SELECT_PAGE = 'SELECT_PAGE';
export const selectPage = createAction(SELECT_PAGE);

export const SCROLL_ACTION = 'SCROLL_ACTION';
export const scrollAction = createAction(SCROLL_ACTION);

export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const fetchActivities = createAction(FETCH_ACTIVITIES);
