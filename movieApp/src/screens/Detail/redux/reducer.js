const initialState = {
  detailMovie: [],
  listGenre: [],
  listArtist: [],
  lengthCastArtist: 0,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return {
        ...state,
        detailMovie: action.payload,
      };
    case 'SET_GENRES':
      return {
        ...state,
        listGenre: action.payload,
      };
    case 'SET_ARTIST':
      return {
        ...state,
        listArtist: action.payload,
      };
    case 'SET_LENGTH_ARTIST':
      return {
        ...state,
        lengthCastArtist: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
