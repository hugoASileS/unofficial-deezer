export const GET_ALBUMS = '[Albums] get albums';
export const SET_ALBUMS = '[Albums] set albums';

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    albums,
  };
}
export function getAlbums() {
  return {
    type: GET_ALBUMS,
  };
}

const initialStatePlayer = {
  albums: [],
};

export function albumsReducer(state = initialStatePlayer, action) {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: action.albums,
      };
    default:
      return state;
  }
}
