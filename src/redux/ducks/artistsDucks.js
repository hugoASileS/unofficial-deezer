export const GET_ARTISTS = '[Artists] get artists';
export const SET_ARTISTS = '[Artists] set artists';
export const GET_ARTIST_TRACKS = '[Artists] get artist tracks by artistId';
export const SET_ARTIST_TRACKS = '[Artists] set tracks artist';
export const SELECT_ARTIST = '[Artists] select artist';

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

export function setTracks(tracks) {
  return {
    type: SET_ARTIST_TRACKS,
    tracks,
  };
}

export function getArtist(artistId) {
  return {
    type: GET_ARTIST_TRACKS,
    artistId,
  };
}

export function selectArtist(artist) {
  return {
    type: SELECT_ARTIST,
    artist,
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
      return {
        ...state,
        ...action.artists,
      };
    case SET_ARTIST_TRACKS:
      return {
        ...state,
        selected: {
          ...state.selected,
          tracks: action.tracks,
        },
      };
    case SELECT_ARTIST:
      return {
        ...state,
        selected: {
          ...state.artist,
          ...action.artist,
        },
      };
    default:
      return state;
  }
}
