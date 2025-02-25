export const counterReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      default:
        return state;
    }
  };
  