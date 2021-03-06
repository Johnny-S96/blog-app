export const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const getData = url => fetch(`${BASE_URL}${url}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error');
  })
