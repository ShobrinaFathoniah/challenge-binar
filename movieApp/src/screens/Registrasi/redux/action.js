export const setDataRegister = data => {
  return {
    type: 'SET_DATA_REGISTER',
    email: data.email,
    username: data.username,
    password: data.password,
    confirmPassword: data.confirmPassword,
    name: data.name,
    city: data.city,
    street: data.street,
    number: data.number,
    zipcode: data.zipcode,
    lat: data.lat,
    long: data.long,
    phone: data.phone,
  };
};
