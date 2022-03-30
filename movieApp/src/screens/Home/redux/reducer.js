const initialState = {
  listRecommended: [],
  listLatest: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED':
      return {
        ...state,
        listRecommended: action.payload,
      };

    case 'SET_LATEST':
      return {
        ...state,
        listLatest: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
