export const GET_ARTISTS = '[Artists] get artists';
export const SET_ARTISTS = '[Artists] set artists';

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    artists,
  };
}
export function getArtists() {
  return {
    type: GET_ARTISTS,
  };
}

const initialStateArtists = {
  data: [],
  total: 0,
  selected: {},
};

export function artistsReducer(state = initialStateArtists, action) {
  switch (action.type) {
    case SET_ARTISTS:
      console.log('...............', state, { action });
      return {
        ...state,
        ...action.artists,
      };
    default:
      return state;
  }
}
