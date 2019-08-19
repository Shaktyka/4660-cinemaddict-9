// Возвращает разметку меню
export const makeFilter = (dataObj, amount, isActive = false) => {
  return `<a href="#${dataObj.name}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
    ${dataObj.name}
    ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
  </a>`.trim();
};

/*
<a href="#watchlist" class="main-navigation__item">Watchlist </a>
<a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
<a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
 */
