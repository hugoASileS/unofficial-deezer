const SET_PLAYLIST = '[Player] set playlist';

export function setPlaylist(playlist) {
  return {
    type: SET_PLAYLIST,
    playlist,
  };
}

const initialStatePlayer = {
  playlist: {},
};

export function playerReducer(state = initialStatePlayer, action) {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
}
