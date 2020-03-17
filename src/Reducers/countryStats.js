export const countryStats = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COUNTRY_STATS':
        return action.stats;
      default:
        return state;
    }
  }