export const setDetailMovie = data => {
  return {
    type: 'SET_DETAIL',
    payload: data,
  };
};

export const setArtist = data => {
  return {
    type: 'SET_ARTIST',
    payload: data,
  };
};

export const setGenres = data => {
  return {
    type: 'SET_GENRES',
    payload: data,
  };
};

export const setLengthCastArtist = data => {
  return {
    type: 'SET_LENGTH_ARTIST',
    payload: data,
  };
};
