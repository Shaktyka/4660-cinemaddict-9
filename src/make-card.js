import {getRandomNumber, getElementsFromArray} from './utils.js';

// Количества миллисекунд для ограничения выборки timestamp для получения года выпуска
const Milliseconds = {
  ONE_HOUR: 3600000,
  SIXTY_THREE_YEARS: 1892160000025
};

const filmDirectors = [
  `Coward Robert Ford`,
  `Steven Caple Jr.`,
  `Julius Avery`,
  `Anthony Russo`,
  `Christopher McQuarrie`,
  `Alex Garland`,
  `Bradley Cooper`,
  `Ryan Coogler`,
  `Damien Chazelle`,
  `Steven Spielberg`,
  `Phil Johnston`,
  `Paul King`,
  `Wes Ball`,
  `Brad Bird`,
  `Travis Knight`
];

const filmWriters = [
  `Billy Wilder`,
  `Ethan Coen and Joel Coen`,
  `Robert Towne`,
  `Quentin Tarantino`,
  `Francis Ford Coppola`,
  `William Goldman`,
  `Charlie Kaufman`,
  `Woody Allen`,
  `Nora Ephron`,
  `Ernest Lehman`,
  `Paul Schrader`,
  `Oliver Stone`
];

const actors = [
  `Robert Downey Jr.`,
  `Chris Hemsworth`,
  `Mark Ruffalo`,
  `Chris Evans`,
  `Tom Cruise`,
  `Henry Cavill`,
  `Ving Rhames`,
  `Simon Pegg`,
  `Shameik Moore`,
  `Jake Johnson`,
  `Hailee Steinfeld`,
  `Hailee Steinfeld`,
  `Mahershala Ali`,
  `Natalie Portman`,
  `Tessa Thompson`
];

// Постеры
const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

// Названия фильмов
const filmTitles = [
  `The Assassination Of Jessie James`,
  `Creed II`,
  `Overlord`,
  `Avengers: Infinity War`,
  `Mission: Impossible`,
  `Annihilation`,
  `Matrix`,
  `A star is Born`,
  `Interstellar`,
  `Green Mile`,
  `Black Panther`,
  `First Man`,
  `Ready Player One`,
  `Maze Runner`,
  `Ralph Breaks the Internet`,
  `The Dance Of Life`
];

// Описания (от 1 до 3)
const phrases = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const filmGenres = [
  `Comedy`,
  `Drama`,
  `Crime`,
  `Action`,
  `Adventure`,
  `Fantasy`,
  `Thriller`,
  `Animation`,
  `Horror`,
  `Biography`,
  `Sci-Fi`,
  `History`,
  `Romance`,
  `Mystery`,
  `Sport`
];

const filmCountries = [
  `Russia`,
  `UK`,
  `China`,
  `Japan`,
  `France`,
  `Canada`,
  `USA`,
  `India`,
  `Italy`
];

// Рейтинг
const ageRates = [
  `0+`,
  `6+`,
  `12+`,
  `16+`,
  `18+`,
  `R`,
  `G`,
  `PG`,
  `PG-13`,
  `NC-17`
];

// Комментарии
const comments = [
  `Mandamus abhorreant deseruisse mea at.`,
  `Mea elit deserunt persequeris at.`,
  `In putant fuisset honestatis qui.`,
  `Magna copiosae apeirian ius at.`,
  `Per cu iracundia splendide.`,
  `Odio contentiones sed cu.`,
  `Usu commodo prompta prodesset id.`,
  `Tation delenit percipitur at vix.`,
  `In rutrum ac purus sit amet tempus.`
];

// Комментарии
const emojis = [
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
  `smile.png`
];

// Возвращает дробное десятичное число (рейтинг)
const getRating = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

// Возвращает рандомный timestamp из диапазона
const getRandomDate = () => Date.now() - getRandomNumber(Milliseconds.ONE_HOUR, Milliseconds.SIXTY_THREE_YEARS);

// Возвращает true или false
const getBoolean = () => Math.random() >= 0.5;

// Генерация объекта комментария
const getCommentObject = () => {
  return {
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    comment: comments[getRandomNumber(0, comments.length - 1)],
    author: [
      `Kate Smith`,
      `Piter Johnson`,
      `Jack Williams`,
      `Daniel Jones`,
      `Diana Brown`,
      `Garry Davis`][Math.floor(Math.random() * 6)],
    date: getRandomDate(),
  };
};

// Генерация массива из Х рандомных комментариев
const getCommentsArray = (num) => {
  const commentsArray = [];
  for (let i = 0; i < num; i++) {
    commentsArray.push(getCommentObject());
  }
  return commentsArray;
};

// Функция для генерации объекта с рандомной структурой данных
export const makeCardData = () => {
  return {
    actors: getElementsFromArray(actors, getRandomNumber(1, 5)),
    ageRating: ageRates[getRandomNumber(0, ageRates.length - 1)],
    avrRating: getRating(0, 10),
    comments: getCommentsArray(getRandomNumber(0, 5)),
    country: filmCountries[getRandomNumber(0, filmCountries.length - 1)],
    date: getRandomDate(),
    description: getElementsFromArray(phrases, getRandomNumber(1, 3)),
    director: filmDirectors[getRandomNumber(0, filmDirectors.length - 1)],
    duration: getRandomNumber(60, 200),
    genres: getElementsFromArray(filmGenres, getRandomNumber(1, 3)),
    inWatchlist: getBoolean(),
    isFavorite: getBoolean(),
    isWatched: getBoolean(),
    originalTitle: filmTitles[getRandomNumber(0, filmTitles.length - 1)],
    poster: posters[getRandomNumber(0, posters.length - 1)],
    releaseTitle: filmTitles[getRandomNumber(0, filmTitles.length - 1)],
    userRating: getRandomNumber(1, 9),
    writers: getElementsFromArray(filmWriters, getRandomNumber(1, 3))
  };
};
