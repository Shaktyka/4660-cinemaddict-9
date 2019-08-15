import {createSearchTemplate} from './components/search.js';
import {createRatingTemplate} from './components/rating.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortTemplate} from './components/sort.js';
import {createFilmsContainerTemplate} from './components/films-container.js';
import {createFilmCardTemplate} from './components/card.js';
import {createShowMoreBtnTemplate} from './components/show-more.js';
// import {createPopupTemplate} from './components/popup.js';
import {makeCardData} from './make-card.js';
console.log(makeCardData());

// Количество карточек для блоков
const CardsAmount = {
  ALL: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2
};

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

// Рендеринг элемента из шаблона
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// Рендеринг компонентов
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

// Рендерим элементы
render(header, createSearchTemplate());
render(header, createRatingTemplate());
render(main, createSiteMenuTemplate());
render(main, createSortTemplate());

// Контейнеры для контента
render(main, createFilmsContainerTemplate());
const allFilmsBlock = main.querySelector(`.films-list`);
const allFilmsContainer = allFilmsBlock.querySelector(`.films-list__container`);
const topRatedContainer = document.querySelector(`#top-rated .films-list__container`);
const mostCommentedContainer = document.querySelector(`#most-commented .films-list__container`);

// Карточки в контейнеры
render(allFilmsContainer, createFilmCardTemplate(), CardsAmount.ALL);
render(allFilmsBlock, createShowMoreBtnTemplate());
render(topRatedContainer, createFilmCardTemplate(), CardsAmount.TOP_RATED);
render(mostCommentedContainer, createFilmCardTemplate(), CardsAmount.MOST_COMMENTED);

// Попап
// render(main, createPopupTemplate());
