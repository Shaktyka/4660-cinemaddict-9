import {getProfileRating} from '../utils.js';

// Возвращает разметку звания пользователя
export const makeRating = (num) => {
  return `<section class="header__profile profile">
      <p class="profile__rating">${num > 0 ? getProfileRating(num) : ``}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`.trim();
};
