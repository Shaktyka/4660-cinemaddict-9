import {getRandomNumber} from './utils.js';

// Данные для сортировки
export const sortArray = [
  {
    name: `default`,
    href: `#`
  },
  {
    name: `date`,
    href: `#`
  },
  {
    name: `rating`,
    href: `#`
  }
];

// Для звания
const WatchedFilms = {
  MIN: 0,
  MAX: 100
};

// Возвращает число просмотренных фильмов
export const getWatchedFilmsNumber = () => {
  return getRandomNumber(WatchedFilms.MIN, WatchedFilms.MAX);
};
