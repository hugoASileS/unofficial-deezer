import { combineReducers } from 'redux';
import { playerReducer } from './ducks/playerDucks';
import { albumsReducer } from './ducks/albumsDucks';
import { artistsReducer } from './ducks/artistsDucks';

const rootReducer = combineReducers({
  albums: albumsReducer,
  players: playerReducer,
  artists: artistsReducer,
});

export default rootReducer;
