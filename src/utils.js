const MAX_SYMBOLS = 140;

// Массив названий месяцов года
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

// Генерирует случайное число от min до max вкл.
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Обрезает текст до 140 символов
export const cropText = (string) => {
  return (string.length > MAX_SYMBOLS) ? string.substr(0, MAX_SYMBOLS - 1) + `...` : string;
};

// Генерирует элемента из шаблона
export const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div.firstChild;
};

// Форматирование даты
export const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

// Возвращает часы и минуты из кол-ва минут
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const formHours = hours > 0 ? (hours + `h`) : ``;
  const mins = minutes % 60;
  const formMins = mins > 0 ? (mins + `m`) : `00m`;
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

// Удаление элемента из DOM
export const remove = (element) => {
  element.remove();
};

export default createElement;
