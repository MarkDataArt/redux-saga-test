import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { SET_NAMES } from '../constants';
import { setNames } from '../reducers/namesReducer';

function* fetchNamesWorker() {
    const url = 'https://rickandmortyapi.com/api/character/?page=1';
    const { data } = yield call(axios.get, url);
    yield put(setNames(data.results));
};

export function* namesWatcher() {
    yield takeEvery(SET_NAMES, fetchNamesWorker);
};