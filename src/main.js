import {makeSearch} from './components/search.js';
import {makeRating} from './components/rating.js';
import {getFilterContainerTemplate} from './components/filter-container.js';
import {getStatsElemTemplate} from './components/stats-elem-template.js';
import {getSortingContainerTemplate} from './components/sort-container.js';
import {getFilmsContainerTemplate} from './components/films-container.js';
import {getUpcomingFilmsContainerTemplate} from './components/upcoming-films-container.js';
import {getTopRatedFilmsContainerTemplate} from './components/toprated-films-container.js';
import {getMostCommentedFilmsContainerTemplate} from './components/most-commented-films-container.js';
import {makeFilter} from './components/filter.js';
import {makeSort} from './components/sort.js';
import {makeCard} from './components/card.js';
import {makePopup} from './components/popup.js';
import {makeShowMoreBtn} from './components/show-more.js';
import {makeCardData} from './make-card.js';
import {getRandomNumber} from './utils.js';
import {filtersData, sortArray, getWatchedFilmsNumber} from './data.js';

// Количество карточек для блоков
const CardsAmount = {
  START: 5,
  TO_LOAD: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2
};

// Элемент для вывода кол-ва фильмов
const filmsAmount = document.querySelector(`.footer__statistics p`);

// Кнопка "Show More"
let showMoreBtn = null;

// Массив данных для карточек фильмов
let filmCards = [];

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

// Генерирует массив с карточками фильмов
const getCardsDataArray = (amount) => {
  for (let i = 0; i < amount; i++) {
    filmCards.push(makeCardData());
  }
};

// Рендеринг элемента из шаблона
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// Рендеринг компонент
const render = (container, template) => {
  container.appendChild(renderElement(template));
};

// Генерируем моковый массив с данными для карточек
getCardsDataArray(getRandomNumber(9, 30));

// Возвращает кол-во фильмов
const getFilmsAmount = (array) => {
  return array.length;
};

filmsAmount.innerHTML = `${getFilmsAmount(filmCards)} movies inside`;

// Добавляем Search и Звание/Рейтинг
render(header, makeSearch());
render(header, makeRating(getWatchedFilmsNumber()));

// Добавляем фильтр
render(main, getFilterContainerTemplate());
const mainNavContainer = document.querySelector(`.main-navigation`);

// Генерируем строку из разметки эл-в фильтра
// Генерируем строку из разметки элементов
const createFilterString = (dataArr) => {
  let filterString = ``;
  let isActive = false;
  let amount = 0;
  dataArr.forEach((dataEl) => {
    isActive = (dataEl.name === `All movies`) ? true : false;
    amount = (dataEl.name === `All movies`) ? 0 : getRandomNumber(1, 20);
    filterString += makeFilter(dataEl, amount, isActive);
  });
  return filterString;
};
// makeFilter()
render(mainNavContainer, createFilterString(filtersData));
render(mainNavContainer, getStatsElemTemplate());

// Добавляем сортинг
// Генерируем строку из разметки элементов
const createSortString = (dataArr) => {
  let sortString = ``;
  let isActive = false;
  dataArr.forEach((dataEl) => {
    isActive = (dataEl.name === `default`) ? true : false;
    sortString += makeSort(dataEl, isActive);
  });
  return sortString;
};
render(main, getSortingContainerTemplate());
render(document.querySelector(`.sort`), createSortString(sortArray));

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

// Рендеринг строки из карточек
const renderCardsString = (dataArr, amount) => {
  let cardsString = ``;
  if (dataArr.length === 0) {
    cardsString = `There are no movies in our database`;
  } else {
    for (let i = 0; i < amount; i++) {
      cardsString += makeCard(dataArr[i]);
    }
  }
  return cardsString;
};

// Добавляем фильмы в контейнер Upcoming
render(upcomingFilmsContainer, renderCardsString(filmCards, CardsAmount.START));

// Обработчик клика по кнопке "Show more"
const showMoreBtnClickHandler = (evt) => {
  evt.preventDefault();
  // console.log('show more!');
};

// Функция рендеринга кнопки "Show more"
const insertShowMoreBtn = () => {
  if (filmCards.length > 5) {
    render(upcomingFilmsWrap, makeShowMoreBtn());
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

// Добавляем фильмы в контейнер Top Rated
const topRatedContainer = filmsContainer.querySelector(`#top-rated .films-list__container`);
render(topRatedContainer, makeCard(makeCardData()), CardsAmount.TOP_RATED);

// Добавляем фильмы в контейнер Most Commented
const mostCommentedContainer = filmsContainer.querySelector(`#most-commented .films-list__container`);
render(mostCommentedContainer, makeCard(makeCardData()), CardsAmount.MOST_COMMENTED);

// Попап (временный код)
const avatar = document.querySelector(`.profile__avatar`);
avatar.addEventListener(`click`, () => {
  render(main, makePopup(makeCardData()));

  const closePopup = document.querySelector(`.film-details`).querySelector(`.film-details__close-btn`);
  closePopup.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    document.querySelector(`.film-details`).remove();
  });
});
