import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { SET_SONG } from '../constants';
import { setSong } from '../reducers/songReducer';

function* fetchSongWorker() {
    const url = 'http://192.168.89.118:5001/api/song/top_songs';
    const { data } = yield call(axios.get, url);
    yield put(setSong(data));
};

export function* songWatcher() {
    yield takeEvery(SET_SONG, fetchSongWorker);
};