export const stats = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_STATS':
        return action.stats;
      default:
        return state;
    }
  }