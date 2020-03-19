export const addCoronaStats = stats => ({
    type: 'ADD_STATS',
    stats
});
  
export const addCountryStats = countryStats => ({
  type: 'ADD_COUNTRY_STATS',
  countryStats
});

export const filterCountryStats = filteredCountryStats => ({
  type: 'FILTER_COUNTRY_STATS',
  filteredCountryStats
});