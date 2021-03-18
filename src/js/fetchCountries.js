import paint from './markup';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults, error } from '@pnotify/core';
defaults.closerHover = false;
const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function createError(errorMessage) {
  return error({
    text: errorMessage,
    animation: 'fade',
    shadow: true,
    hide: true,
    delay: 2000,
  });
}

const fetchCountries = searchQuery => {
  const countryName = searchQuery.target.value;

  countryName.trim() &&
    fetch(`${BASE_URL}/${countryName}`)
      .then(response =>
        response.ok ? response.json() : console.error(response),
      )
      .then(name => {
        paint(name, countryName);
      })
      .catch(error =>{
        createError('Can not find country, please try again')
      })
}

export default fetchCountries;
