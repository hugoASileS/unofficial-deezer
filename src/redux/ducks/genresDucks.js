export const GET_GENRES = '[Genres] get genres';
export const SET_GENRES = '[Genres] set genres';

export function setGenres(albums) {
  return {
    type: SET_GENRES,
    albums,
  };
}
export function getGenres() {
  return {
    type: GET_GENRES,
  };
}

const initialStateGenres = {
  data: [],
  total: 0,
};

export function albumsReducer(state = initialStateGenres, action) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        ...action.albums,
      };
    default:
      return state;
  }
}
