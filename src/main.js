import {createSearchTemplate} from './components/search.js';
import {createRatingTemplate} from './components/rating.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createFilmCardTemplate} from './components/card.js';
import {createShowMoreBtnTemplate} from './components/show-more.js';
import {makeCardData} from './make-card.js';
import {getRandomNumber} from './utils.js';

// Количество карточек для блоков
const CardsAmount = {
  START: 5,
  TO_LOAD: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2
};

// Массив данных для карточек фильмов
const filmCards = [];

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

// Возвращает разметку общего блока для карточек фильмов
export const createFilmsContainerTemplate = () => {
  return `<section class="films"></section>`.trim();
};

// Возвращает разметку блока для группы Upcoming
export const createUpcomingFilmsContainerTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">

      </div>
    </section>`.trim();
};

// Возвращает разметку блока для группы Top Rated
export const createTopRatedFilmsContainerTemplate = () => {
  return `<section class="films-list--extra" id="top-rated">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      </div>
    </section>`.trim();
};

// Возвращает разметку блока для группы Most Commented
export const createMostCommentedFilmsContainerTemplate = () => {
  return `<section class="films-list--extra" id="most-commented">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      </div>
    </section>`.trim();
};

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
const render = (container, template, amount = null) => {
  if (amount) {
    let fragment = new DocumentFragment();
    for (let i = 0; i < amount; i++) {
      const el = renderElement(template);
      fragment.appendChild(el);
    }
    container.appendChild(fragment);
  } else {
    container.appendChild(renderElement(template));
  }
};

getCardsDataArray(getRandomNumber(9, 30));

// Рендерим элементы
render(header, createSearchTemplate());
render(header, createRatingTemplate());
render(main, createFilterTemplate());
render(main, createSortTemplate());

// Контейнеры для контента
render(main, createFilmsContainerTemplate());

const filmsContainer = main.querySelector(`.films`);
render(filmsContainer, createUpcomingFilmsContainerTemplate());
render(filmsContainer, createTopRatedFilmsContainerTemplate());
render(filmsContainer, createMostCommentedFilmsContainerTemplate());

// Обёртка для Upcoming фильмов
const upcomingFilmsWrap = filmsContainer.querySelector(`.films-list`);
// Контейнер для Upcoming фильмов
const upcomingFilmsContainer = upcomingFilmsWrap.querySelector(`.films-list__container`);
// Добавляем фильмы в контейнер Upcoming
render(upcomingFilmsContainer, createFilmCardTemplate(makeCardData()), CardsAmount.START);
// Добавляем кнопку "Show More"
render(upcomingFilmsWrap, createShowMoreBtnTemplate());

const showMoreBtn = main.querySelector(`.films-list__show-more`);

showMoreBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  // console.log('show more!');
});

// Добавляем фильмы в контейнер Top Rated
const topRatedContainer = filmsContainer.querySelector(`#top-rated .films-list__container`);
render(topRatedContainer, createFilmCardTemplate(makeCardData()), CardsAmount.TOP_RATED);

// Добавляем фильмы в контейнер Most Commented
const mostCommentedContainer = filmsContainer.querySelector(`#most-commented .films-list__container`);
render(mostCommentedContainer, createFilmCardTemplate(makeCardData()), CardsAmount.MOST_COMMENTED);

// Попап
// render(main, createPopupTemplate());
