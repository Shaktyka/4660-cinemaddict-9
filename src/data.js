import {getRandomNumber} from './utils.js';
// const Sort = ['default', 'date', 'rating'];

// Для звания
const WatchedFilms = {
  MIN: 0,
  MAX: 100
};

// Возвращает число просмотренных фильмов
export const getWatchedFilmsNumber = () => {
  return getRandomNumber(WatchedFilms.MIN, WatchedFilms.MAX);
};
