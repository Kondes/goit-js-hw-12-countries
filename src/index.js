import './styles.css';
import './styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';

const searchFormRef = document.querySelector('.search-form__input');

searchFormRef.addEventListener('input', debounce(fetchCountries, 500));
