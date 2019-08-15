// Генерация случайного числа от min до max включительно
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));
