// Рандомное целое число из заданного интервала

function getRandomNumber(min, max) {
  if (max <= min) {
    [min, max] = [max, min];
  }
  if (min <= 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Вернуть случайный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomArrayElement};
