import { call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ARTIST_TRACKS, setTracks } from '../ducks/artistsDucks';

function fetchArtist(artistId) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/top?limit=50`
  ).then((response) => response.json());
}

export function* getArtist({ artistId }) {
  try {
    const data = yield call(fetchArtist, artistId);
    yield put(setTracks(data));
  } catch (e) {
    yield put(setTracks(e));
  }
}

export default function* getAsyncArtists() {
  yield takeLatest(GET_ARTIST_TRACKS, getArtist);
}
