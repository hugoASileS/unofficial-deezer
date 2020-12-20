import { all } from '@redux-saga/core/effects';
import getAsyncAlbums from './sagas/albumsSaga';

export default function* rootSaga() {
  yield all([getAsyncAlbums()]);
}
