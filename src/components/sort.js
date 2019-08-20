import {createElement} from '../utils.js';

// Класс "Элемент фильтра сортировки"
export class SortElement {
  constructor({name, href}, isActiveEl) {
    this._element = null;
    this._href = href;
    this._isActiveEl = isActiveEl;
    this._name = name;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<li>
      <a href="${this._href}" class="sort__button ${this._isActiveEl ? `sort__button--active` : ``}">
        Sort by ${this._name}
      </a>
    </li>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
