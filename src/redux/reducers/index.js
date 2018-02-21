const defaultState = {
  savedBooks: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GETBOOKS':
      return { savedBooks: action.payload.booksData };
    default: return state;
  }
};

export default reducer;
