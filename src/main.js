const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

const searchContainer = header.querySelector(`.header__search`);
const ratingContainer = header.querySelector(`.header__profile`);

const menuContainer = main.querySelector(`.main-navigation`);
const sortingContainer = main.querySelector(`.sort`);
const filmsListContainer = main.querySelector(`.films-list__container`);
const filmsContainer = main.querySelector(`.films-list`);

const topRatedContainer = document.getElementById(`top-rated`);
const mostCommentedContainer = document.getElementById(`most-commented`);

// Импорт компонент
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilmCardTemplate} from './components/card.js';
import {createPopupTemplate} from './components/popup.js';
import {createRatingTemplate} from './components/rating.js';
import {createSearchTemplate} from './components/search.js';
import {createShowMoreBtnTemplate} from './components/show-more.js';
import {createSortTemplate} from './components/sort.js';



// Рендеринг компонент
const render = (container, template) => {
  // принимает контейнер и разметку элемента
};


