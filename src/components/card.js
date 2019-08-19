import {createElement, cropText, formatTime} from '../utils.js';

// Класс "Карточка фильма"
export class Card {
  constructor({releaseTitle, avrRating, date, duration, genres, poster, filmTitle, description, comments, inWatchlist, isWatched, isFavorite}) {
    this._avrRating = avrRating;
    this._comments = comments.length;
    this._date = new Date(date);
    this._description = description.join(` `);
    this._duration = duration;
    this._element = null;
    this._filmTitle = filmTitle;
    this._genres = genres.join(`, `);
    this._inWatchlist = inWatchlist;
    this._isFavorite = isFavorite;
    this._isWatched = isWatched;
    this._poster = poster;
    this._releaseTitle = releaseTitle;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<article class="film-card">
      <h3 class="film-card__title">${this._releaseTitle}</h3>
      <p class="film-card__rating">${this._avrRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._date.getFullYear()}</span>
        <span class="film-card__duration">${formatTime(this._duration)}</span>
        <span class="film-card__genre">${this._genres}</span>
      </p>
      <img src="./images/posters/${this._poster}" alt="${this._filmTitle}" class="film-card__poster">
      <p class="film-card__description">${cropText(this._description)}</p>
      <a class="film-card__comments">${this._comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${this._inWatchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${this._isWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${this._isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
