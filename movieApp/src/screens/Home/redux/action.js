export const setRecommended = data => {
  return {
    type: 'SET_RECOMMENDED',
    payload: data,
  };
};

export const setLatest = data => {
  return {
    type: 'SET_LATEST',
    payload: data,
  };
};
