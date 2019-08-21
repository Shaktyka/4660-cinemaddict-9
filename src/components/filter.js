import {createElement} from '../utils.js';

// Класс "Элемент фильтра"
export class Filter {
  constructor({name, href}, amount = 0, isWithoutCount, isActiveFilter) {
    this._amount = amount;
    this._element = null;
    this._href = href;
    this._name = name;
    this._isActiveFilter = isActiveFilter;
    this._isWithoutCount = isWithoutCount;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<a href="${this._href}" class="main-navigation__item ${this._isActiveFilter ? `main-navigation__item--active` : ``}">
      ${this._name}
      ${this._isWithoutCount ? `` : `<span class="main-navigation__item-count">${this._amount}</span>`}
    </a>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
