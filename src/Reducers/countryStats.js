export const countryStats = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COUNTRY_STATS':
        return [...state, ...action.countryStats];
      default:
        return state;
    }
  }