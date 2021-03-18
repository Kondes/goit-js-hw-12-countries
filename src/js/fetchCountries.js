import paint from './markup';

const BASE_URL = 'https://restcountries.eu/rest/v2/name';

const fetchCountries = searchQuery => {
  const countryName = searchQuery.target.value;

  countryName.trim() &&
    fetch(`${BASE_URL}/${countryName}`)
      .then(response =>
        response.ok ? response.json() : console.error(response),
      )
      .then(name => {
        paint(name, countryName);
      });
};

export default fetchCountries;
