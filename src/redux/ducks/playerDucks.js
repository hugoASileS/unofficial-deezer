const SET_PLAYLIST = '[Player] set playlist';
const NEXT_TRACK = '[Player] next track';

export function setPlaylist(payload) {
  return {
    type: SET_PLAYLIST,
    payload,
  };
}

export function nextTrack() {
  return {
    type: NEXT_TRACK,
  };
}

const initialStatePlayer = {
  tracks: [],
  current: undefined,
};

export function playerReducer(state = initialStatePlayer, action) {
  switch (action.type) {
    case SET_PLAYLIST:
      const { tracks, track: current } = action.payload;
      return {
        ...state,
        tracks,
        current,
      };
    case NEXT_TRACK:
      let next = state.current;
      if (state.tracks.length > state.current.index + 1) {
        next = { ...state.tracks[state.current.index + 1], index: state.current.index + 1 };
      }

      return {
        ...state,
        current: next,
      };
    default:
      return state;
  }
}
