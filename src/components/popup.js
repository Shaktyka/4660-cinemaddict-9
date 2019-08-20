import {createElement, formatTime, formatDate} from '../utils.js';

export class Popup {
  constructor({actors, ageRating, avrRating, comments, country, date, description, director, duration, filmTitle, genres, inWatchlist, isFavorite, isWatched, originalTitle, poster, releaseTitle, userRating, writers}) {
    this._actors = actors.join(`, `);
    this._ageRating = ageRating;
    this._avrRating = avrRating;
    this._comments = comments;
    this._country = country;
    this._date = new Date(date);
    this._description = description.join(` `);
    this._director = director;
    this._duration = duration;
    this._element = null;
    this._filmTitle = filmTitle;
    this._genres = genres;
    this._inWatchlist = inWatchlist;
    this._isFavorite = isFavorite;
    this._isWatched = isWatched;
    this._originalTitle = originalTitle;
    this._poster = poster;
    this._releaseTitle = releaseTitle;
    this._userRating = userRating;
    this._writers = writers.join(`, `);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
    <div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="${this._releaseTitle}">

          <p class="film-details__age">${this._ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${this._releaseTitle}</h3>
              <p class="film-details__title-original">Original: ${this._originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${this._avrRating}</p>
              ${this._userRating ? `<p class="film-details__user-rating">Your rate ${this._userRating}</p>` : ``}
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${this._director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${this._writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${this._actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${formatDate(this._date)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${formatTime(this._duration)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${this._country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${this._genres.length > 1 ? `Genres` : `Genre`}</td>
              <td class="film-details__cell">
                ${this._genres.map((genre) => (`<span class="film-details__genre">${genre}</span>`.trim())).join(``)}
              </td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${this._description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._inWatchlist ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="form-details__middle-container" ${this._isWatched ? `style="display: block;"` : `style="display: none;"`}>
      <section class="film-details__user-rating-wrap">
        <div class="film-details__user-rating-controls">
          <button class="film-details__watched-reset" type="button">Undo</button>
        </div>

        <div class="film-details__user-score">
          <div class="film-details__user-rating-poster">
            <img src="./images/posters/${this._poster}" alt="${this._releaseTitle}" class="film-details__user-rating-img">
          </div>

          <section class="film-details__user-rating-inner">
            <h3 class="film-details__user-rating-title">${this._releaseTitle}</h3>

            <p class="film-details__user-rating-feelings">How you feel it?</p>

            <div class="film-details__user-rating-score">
              ${new Array(9).fill().map((item, index) => (`
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${index + 1}" id="rating-${index + 1}" ${(index + 1 === +this._userRating) ? `checked` : ``}>
                <label class="film-details__user-rating-label" for="rating-${index + 1}">${index + 1}</label>`.trim())).join(``)}
            </div>
          </section>
        </div>
      </section>
    </div>

    <div class="form-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>

        <ul class="film-details__comments-list">
          ${this._comments.map((item) => (`
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${item.emoji}" width="55" height="55" alt="emoji">
              </span>
              <div>
                <p class="film-details__comment-text">${item.comment}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${item.author}</span>
                  <span class="film-details__comment-day">3 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>`.trim())).join(``)}
        </ul>

        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
            <label class="film-details__emoji-label" for="emoji-gpuke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
    </form>
    </section>`.trim();
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
