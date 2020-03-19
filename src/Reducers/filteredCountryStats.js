export const filteredCountries = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_COUNTRY_STATS':
            return [...state, ...action.filteredCountryStats]
        default:
            return state
     }
}