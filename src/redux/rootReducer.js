import { combineReducers } from 'redux';
import { playerReducer } from './ducks/playerDucks';
import { albumsReducer } from './ducks/AlbumsDucks';

const rootReducer = combineReducers({
  albums: albumsReducer,
  player: playerReducer,
});

export default rootReducer;
