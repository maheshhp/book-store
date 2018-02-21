const defaultState = {
  savedBooks: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GETBOOKS':
      return { ...state, savedBooks: action.payload.bookData };
    default: return state;
  }
};

export default reducer;
