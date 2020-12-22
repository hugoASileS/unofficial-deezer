import { fork } from '@redux-saga/core/effects';
import getAsyncAlbums from './sagas/albumsSaga';
import getAsyncArtists from './sagas/artistsSaga';

export default function* rootSaga() {
  yield fork(getAsyncAlbums);
  yield fork(getAsyncArtists);
}
