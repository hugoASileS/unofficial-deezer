import { call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ARTISTS, setArtists } from '../ducks/artistsDucks';

function albums() {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127/tracks').then((response) =>
    response.json()
  );
}

export function* getArtists() {
  try {
    const data = yield call(albums);
    yield put(setArtists(data));
  } catch (e) {
    yield put(setArtists(e));
  }
}

export default function* getAsyncArtists() {
  yield takeLatest(GET_ARTISTS, getArtists);
}
