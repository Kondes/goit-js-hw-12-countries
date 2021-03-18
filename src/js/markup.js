import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults, notice } from '@pnotify/core';
defaults.closerHover = false;

import countryList from '../templates/list.hbs';
import countriesMarkup from '../templates/countries-markup.hbs';

const countryContainer = document.querySelector('.country-container');

function createNotice(noticeMessage) {
  const myNotice = notice({
    text: noticeMessage,
    hide: true,
    delay: 2000,
  });
  return myNotice;
}

const paint = (arg, value) => {
  if (value.length < 2) {
    createNotice('Please write more symbols!!!');
  } else if (arg.length >= 2 && arg.length <= 10) {
    countryContainer.innerHTML = countryList(arg);
  } else if (arg.length === 1) {
    countryContainer.innerHTML = countriesMarkup(arg[0]);
  } else if (arg.length > 10) {
    createNotice('Too many matches found. Please enter a more specific query!');
  }
};

export default paint;
