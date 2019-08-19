import {getRandomNumber} from './utils.js';

// Данные для фильтра
export const filtersData = [
  {
    name: `All movies`,
    href: `#all`
  },
  {
    name: `Watchlist`,
    href: `#watchlist`
  },
  {
    name: `History`,
    href: `#history`
  },
  {
    name: `Favorites`,
    href: `#favorites`
  }
];

// Данные для сортировки
export const sortArray = [
  {
    name: `default`,
    href: `?sort=default`
  },
  {
    name: `date`,
    href: `?sort=data`
  },
  {
    name: `rating`,
    href: `?sort=rating`
  }
];

// Данные для звания
const WatchedFilms = {
  MIN: 0,
  MAX: 100
};

// Возвращает число просмотренных фильмов
export const getWatchedFilmsNumber = () => {
  return getRandomNumber(WatchedFilms.MIN, WatchedFilms.MAX);
};
