export const retrieveStats = () => {
    return fetch('https://www.coronavirus.com/video-api/v1/')
    .then(response => {
        if (!response.ok) {
          throw Error('Error fetching games');
        }
        return response.json();
      })
}