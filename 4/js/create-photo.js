import {getRandomNumber, getRandomArrayElement} from './util.js';

// Создание массива из 25 сгенерированных объектов

const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Борис',
  'Алиса',
  'Кекс',
  'Хуан Себастьян',
  'Вася Пупкин',
  'Пинк Флойд',
  'Бэтмен',
  'Хайзенберг',
  'Данте',
  'Гордон Фриман',
  'Безумный Макс',
  'Клинт Иствуд',
  'Безымяный',
];
const DESCRIPTIONS = [
  'Пристегнуть ремни',
  'Бесконечность не предел',
  'Вечеринка в самом разгаре',
  'Скажи мое имя',
  'Опять работать',
  'Газ до отказа',
  'Сделал мой день',
  'Клин клином',
  'Завалил горизонт',
  'Карты, деньги, без стволов',
  'Хороший, плохой, чудной',
  'I am Batman',
  'Пришла посылка',
  'После фотошопа',
  'Момент истины',
  'Это шедевр!',
  'Смешное описание не придумал',
];

// Функция комментария к фото

const createComment = () => {
  const comments = [];

  for (let index = 1; index <= getRandomNumber(1, 2); index++) {
    comments.push({
      id: getRandomNumber(1, PHOTO_COUNT),
      avatar: `img/avatar-${getRandomNumber(1, AVATAR_COUNT)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    });
  }

  return comments;
};

// Функция создания фотографий и описания

const createPhotos = () => {
  const photos = [];

  for (let index = 1; index <= PHOTO_COUNT; index++) {
    photos.push({
      id: index,
      url: `photos/${index}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomNumber(15, 200),
      comments: createComment(),
    });
  }

  return photos;
};

export {createPhotos};
