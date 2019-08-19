import {cropText, formatTime} from '../utils.js';

// Возвращает разметку карточки фильма
export const makeCard = (dataObj) => {
  return `<article class="film-card">
    <h3 class="film-card__title">${dataObj.releaseTitle}</h3>
    <p class="film-card__rating">${dataObj.avrRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${new Date(dataObj.year).getFullYear()}</span>
        <span class="film-card__duration">${formatTime(dataObj.duration)}</span>
        <span class="film-card__genre">${dataObj.genres.join(`, `)}</span>
      </p>
      <img src="./images/posters/${dataObj.poster}" alt="${dataObj.filmTitle}" class="film-card__poster">
      <p class="film-card__description">${cropText(dataObj.description.join(` `))}</p>
      <a class="film-card__comments">${dataObj.comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${dataObj.inWatchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${dataObj.isWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${dataObj.isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
      </form>
    </article>`.trim();
};
