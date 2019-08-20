import {createElement} from '../utils.js';

// Класс для компонента поиска
export class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
