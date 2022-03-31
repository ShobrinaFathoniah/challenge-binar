const initialState = {
  dataUsername: '',
  dataPassword: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        dataUsername: action.payload,
      };

    case 'SET_PASSWORD':
      return {
        ...state,
        dataPassword: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
