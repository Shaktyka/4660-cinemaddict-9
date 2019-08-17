const MAX_SYMBOLS = 140;

// Генерирует случайное число от min до max вкл.
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Обрезает текст до 140 символов
export const cropText = (string) => {
  return (string.length > MAX_SYMBOLS) ? string.substr(0, MAX_SYMBOLS - 1) + `...` : string;
};

// Генерирует элемент из строки
export const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// Возвращает часы и минуты из кол-ва минут
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const formHours = hours > 0 ? (hours + `h`) : ``;
  const mins = minutes % 60;
  const formMins = mins > 0 ? (mins + `m`) : `00 m`;
  return formHours + ` ` + formMins;
};

// Возвращает звание в зависимости от кол-ва просмотренных фильмов
export const getProfileRating = (num) => {
  let rating;
  if (num >= 1 && num <= 10) {
    rating = `novice`;
  } else if (num >= 11 && num <= 20) {
    rating = `fan`;
  } else if (num >= 21) {
    rating = `movie buff`;
  } else {
    rating = ``;
  }
  return rating;
};
