import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ALBUM, GET_ALBUMS, setAlbum, setAlbums } from '../ducks/albumsDucks';
import { setPlaylist } from '../ducks/playerDucks';
import { setArtists } from '../ducks/artistsDucks';

function albums() {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=50').then((response) =>
    response.json()
  );
}
function album(albumId) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`).then((response) =>
    response.json()
  );
}

export function* getAlbums() {
  try {
    const data = yield call(albums);
    yield put(setAlbums(data.albums));
    yield put(setArtists(data.artists));
    yield put(
      setPlaylist(data.playlists)
    ); /*
    yield put(setPodcasts(data.podcasts));
    yield put(setTracks(data.tracks));*/
  } catch (e) {
    yield put(setAlbums(e));
  }
}

export function* getAlbum({ albumId }) {
  try {
    const data = yield call(album, albumId);
    yield put(setAlbum(data));
  } catch (e) {
    yield put(setAlbums(e));
  }
}

export default function* getAsyncAlbums() {
  try {
    yield all([yield takeLatest(GET_ALBUMS, getAlbums), yield takeLatest(GET_ALBUM, getAlbum)]);
  } catch (e) {}
}
