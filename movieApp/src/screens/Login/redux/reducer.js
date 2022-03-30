const initialState = {
  username: '',
  password: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };

    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
