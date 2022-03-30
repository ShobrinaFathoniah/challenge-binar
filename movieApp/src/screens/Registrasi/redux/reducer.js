const initialState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  street: '',
  number: '',
  zipcode: '',
  lat: '',
  long: '',
  phone: '',
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_REGISTER':
      return {
        ...state,
        email: action.email,
        username: action.username,
        password: action.password,
        confirmPassword: action.confirmPassword,
        name: action.name,
        city: action.city,
        street: action.street,
        number: action.number,
        zipcode: action.zipcode,
        lat: action.lat,
        long: action.long,
        phone: action.phone,
      };

    default:
      return {
        ...state,
      };
  }
};
