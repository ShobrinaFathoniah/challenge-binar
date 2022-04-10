import {
  setRefreshing,
  setConnection,
  setIsLoading,
} from '../../store/globalAction';

const getDataDetailMovie = idMovie => async dispatch => {
  dispatch(setIsLoading(true));

  try {
    const res = await axios.get(`${BASE_URL}/movies/${idMovie}`);

    console.log(idMovie);
    console.log(res);
    console.log(res.data.credits.cast.length);

    dispatch(setDetailMovie(res.data));
    dispatch(setGenres(res.data.genres));
    dispatch(setArtist(res.data.credits.cast));
    dispatch(setLengthCastArtist(res.data.credits.cast.length));

    dispatch(setIsLoading(false));
    dispatch(setRefreshing(false));
  } catch (error) {
    dispatch(setIsLoading(false));

    console.log(error);
    console.log(idMovie);
    dispatch(setRefreshing(false));
  }
};

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
