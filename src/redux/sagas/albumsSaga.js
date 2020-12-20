import { call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ALBUMS, setAlbums } from '../ducks/AlbumsDucks';

function albums() {
  return fetch(
    'https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem'
  ).then((response) => response.json());
}

export function* getAlbums() {
  try {
    const data = yield call(albums);
    yield put(setAlbums(data));
  } catch (e) {
    yield put(setAlbums(e));
  }
}

export default function* getAsyncAlbums() {
  yield takeLatest(GET_ALBUMS, getAlbums);
}
