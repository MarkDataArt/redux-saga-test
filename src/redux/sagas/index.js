import { all } from 'redux-saga/effects';
import { songWatcher } from './songSaga';
import { namesWatcher } from './namesSaga';

export function* rootSaga() {
    yield all([
        songWatcher(),
        namesWatcher()
    ]);
}