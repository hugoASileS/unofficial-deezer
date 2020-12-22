export const GET_ALBUM = '[Albums] get album by id';
export const SET_ALBUM = '[Albums] set album';
export const SET_ALBUMS = '[Albums] set albums';
export const GET_ALBUMS = '[Albums] get albums';

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
export function setAlbum(album) {
  return {
    type: SET_ALBUM,
    album,
  };
}
export function getAlbum(albumId) {
  return {
    type: GET_ALBUM,
    albumId,
  };
}

const initialStateAlbums = {
  data: [],
  total: 0,
  selected: {},
};

export function albumsReducer(state = initialStateAlbums, action) {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        ...action.albums,
      };
    case SET_ALBUM:
      return {
        ...state,
        album: action.album,
      };
    default:
      return state;
  }
}
