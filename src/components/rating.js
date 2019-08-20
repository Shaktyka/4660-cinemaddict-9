import {createElement, getProfileRating} from '../utils.js';

// Класс для компонента поиска
export class Rating {
  constructor(amount) {
    this._amount = amount;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<section class="header__profile profile">
      <p class="profile__rating">${this._amount > 0 ? getProfileRating(this._amount) : ``}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
