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
