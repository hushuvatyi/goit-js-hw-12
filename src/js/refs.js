export const refs = {
  API_KEY: '46342237-7f01d30a27b9cd655db8e01c6',
  BASE_URL: 'https://pixabay.com/api/?',
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  div: document.createElement('div'),

  message: {
    info: 'Please enter a value in the search field!',
    warning:
      'Sorry, there are no images matching your search query. Please try again!',
    error:
      'Sorry, there are no connection to the server. Please try again later! ',
    exception:
      'Exception: We have some issue with connection. Please try again later! ',
  },

  color: {
    blue: '#abd4f8',
    red: '#e97782',
  },
};
