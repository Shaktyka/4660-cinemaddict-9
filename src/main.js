import {Search} from './components/search.js';
import {Rating} from './components/rating.js';
import {getFilterContainerTemplate} from './components/filter-container.js';
import {getStatsElemTemplate} from './components/stats-elem-template.js';
import {getSortingContainerTemplate} from './components/sort-container.js';
import {getFilmsContainerTemplate} from './components/films-container.js';
import {getUpcomingFilmsContainerTemplate} from './components/upcoming-films-container.js';
import {getTopRatedFilmsContainerTemplate} from './components/toprated-films-container.js';
import {getMostCommentedFilmsContainerTemplate} from './components/most-commented-films-container.js';
import {Filter} from './components/filter.js';
import {SortElement} from './components/sort.js';
import {Card} from './components/card.js';
import {Popup} from './components/popup.js';
import {ShowMoreButton} from './components/show-more.js';
import {makeCardData} from './make-card.js';
import {getRandomNumber, createElement, shuffleArray, getElementsFromArray} from './utils.js';
import {filtersData, sortData, getWatchedFilmsNumber} from './data.js';

// Количество карточек для блоков
const CardsAmount = {
  START: 5,
  TO_LOAD: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2
};

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

// Массив данных для карточек фильмов
let filmCards = [];

// Элемент для вывода кол-ва фильмов
const filmsAmount = document.querySelector(`.footer__statistics p`);

// Кнопка "Show More"
let showMoreBtn = null;

// Открытый попап
let isOpenPopup = null;

// Генерирует массив с карточками фильмов
const getCardsDataArray = (amount) => {
  filmCards = new Array(amount).fill(``).map(makeCardData);
};

// Генерируем моковый массив с данными для карточек
getCardsDataArray(getRandomNumber(9, 40));

// Возвращает кол-во фильмов
const getFilmsAmount = (array) => {
  return array.length;
};

filmsAmount.innerHTML = `${getFilmsAmount(filmCards)} movies inside`;

// Рендеринг компонент
const render = (container, element) => {
  container.appendChild(createElement(element));
};

// Добавляем Search и Звание/Рейтинг
header.appendChild(new Search().getElement());
header.appendChild(new Rating(getWatchedFilmsNumber()).getElement());

// Добавляем фильтр
render(main, getFilterContainerTemplate());
const mainNavContainer = document.querySelector(`.main-navigation`);

// Фильтрация массива данных карточек
const countFiteredCards = (cardsArray, filterName) => {
  let filteredArr = [];

  switch (filterName) {
    case `All movies`:
      break;
    case `Watchlist`:
      filteredArr = cardsArray.filter((obj) => obj.inWatchlist);
      break;
    case `History`:
      filteredArr = cardsArray.filter((obj) => obj.isWatched);
      break;
    case `Favorites`:
      filteredArr = cardsArray.filter((obj) => obj.isFavorite);
      break;
    default:
      break;
  }
  return filteredArr.length;
};

// Рендеринг фильтра
const renderFilter = (container, filterArray) => {
  const fragment = document.createDocumentFragment();

  filterArray.forEach((obj) => {
    const isWithoutCount = obj.name === `All movies`;
    const isActiveFilter = obj.name === `All movies`;

    const amount = countFiteredCards(filmCards, obj.name);

    const filter = new Filter(obj, amount, isWithoutCount, isActiveFilter).getElement();
    fragment.appendChild(filter);
  });

  container.appendChild(fragment);
};

// Стартовый рендеринг фильтра
renderFilter(mainNavContainer, filtersData);
// + Элемент статистики
render(mainNavContainer, getStatsElemTemplate());

// SORTING FILTER
render(main, getSortingContainerTemplate());
const sortingContainer = document.querySelector(`.sort`);

// Рендеринг фильтра сортировки
const renderSortFilter = (container, dataArray) => {
  const fragment = document.createDocumentFragment();

  dataArray.forEach((obj) => {
    const isActiveFilter = obj.name === `default`;

    const element = new SortElement(obj, isActiveFilter).getElement();
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
};

renderSortFilter(sortingContainer, sortData);

// Контейнеры для контента
render(main, getFilmsContainerTemplate());

const filmsContainer = main.querySelector(`.films`);
render(filmsContainer, getUpcomingFilmsContainerTemplate());
render(filmsContainer, getTopRatedFilmsContainerTemplate());
render(filmsContainer, getMostCommentedFilmsContainerTemplate());

// Обёртка для Upcoming фильмов
const upcomingFilmsWrap = filmsContainer.querySelector(`.films-list`);
// Контейнер для Upcoming фильмов
const upcomingFilmsContainer = upcomingFilmsWrap.querySelector(`.films-list__container`);

// Рендеринг карточек
const renderCards = (container, dataArray, amount) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const card = new Card(dataArray[i]).getElement();
    const popup = new Popup(dataArray[i]);
    fragment.appendChild(card);
  }
  container.appendChild(fragment);
};

// Добавляем фильмы в контейнер Upcoming
renderCards(upcomingFilmsContainer, filmCards, CardsAmount.START);

// Обработчик клика по кнопке "Show more"
const showMoreBtnClickHandler = (evt) => {
  evt.preventDefault();
  // console.log('show more!');
};

// Функция рендеринга кнопки "Show more"
const insertShowMoreBtn = () => {
  if (filmCards.length > 5) {
    upcomingFilmsWrap.appendChild(new ShowMoreButton().getElement());
    showMoreBtn = main.querySelector(`.films-list__show-more`);
    showMoreBtn.addEventListener(`click`, showMoreBtnClickHandler);
  } else {
    if (showMoreBtn) {
      showMoreBtn.remove();
      showMoreBtn.removeEventListener(`click`, showMoreBtnClickHandler);
    }
    showMoreBtn = null;
  }
};

insertShowMoreBtn();

// Возвращает отфильтрованный массив
const sortArrayByAvrRating = (cardsArray) => {
  const compareNumbers = (a, b) => {
    if (a.avrRating < b.avrRating) {
      return 1;
    }
    if (a.avrRating > b.avrRating) {
      return -1;
    }
    // a === b
    return 0;
  };

  let sortedArr = [];
  sortedArr = cardsArray.sort(compareNumbers);

  return sortedArr;
};

// Добавляем фильмы в контейнер Top Rated
const topRatedContainer = filmsContainer.querySelector(`#top-rated .films-list__container`);
renderCards(topRatedContainer, sortArrayByAvrRating(filmCards.slice()), CardsAmount.TOP_RATED);

// Добавляем фильмы в контейнер Most Commented
const mostCommentedContainer = filmsContainer.querySelector(`#most-commented .films-list__container`);
renderCards(mostCommentedContainer, sortArrayByAvrRating(filmCards.slice()), CardsAmount.MOST_COMMENTED);
