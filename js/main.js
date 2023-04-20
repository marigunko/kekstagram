// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Функция для проверки максимальной длины строки

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('', 140);


//Структура каждого объекта должна быть следующей:

// id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
const IDS = [];
const getRandomId = (min, max) => {
  const id = Math.floor(min + Math.random() * (max - min));
  if (IDS.includes(id)) {
    return getRandomId (min, max);
  }
  else {
    IDS.push (id);
    return id;
  }
};

getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);
getRandomId(1, 26);


// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
const URLS = [];
const getRandomUrl = (min, max) => {
  const url = Math.floor(min + Math.random() * (max - min));
  if (URLS.includes(url)) {
    return getRandomUrl (min, max);
  }
  else {
    URLS.push (url);
    return url;
  }
};

getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);
getRandomUrl(1, 26);


// + description, строка — описание фотографии. Описание придумайте самостоятельно.
const DESCRIPTIONS =[
  'Лучший день',
  'Я на море',
  'Positive vibes',
  'Per aspera ad astra',
];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

/* comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
} */

// У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.
const COMMENT_IDS = [];
const getRandomCommentId = (min, max) => {
  const commentId = Math.floor(min + Math.random() * (max - min));
  if (COMMENT_IDS.includes(commentId)) {
    return getRandomCommentId (min, max);
  }
  else {
    COMMENT_IDS.push (commentId);
    return commentId;
  }
};

getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);
getRandomCommentId(100, 1000);


// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

/* Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! */
const MESSAGES =[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
const NAMES = [
  'Кристинааааа',
  'Маринааааа',
  'Джаред Лето',
  'Эд Ширан',
  'Тейлор Свифт',
  'Селена Гомез',
  'The Weeknd',
];


const getRandomArrayElement = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];

const createComment = () => ({
  id: COMMENT_IDS.shift(),
  avatar: `img/avatar-${  getRandomPositiveInteger (1, 6)  }.svg`,
  message: getRandomArrayElement (MESSAGES),
  name: getRandomArrayElement (NAMES),
});


//В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
const SIMILAR_OBJECT_COUNT = 25;

const createObject = () => ({
  id: IDS.shift(),
  url: `photos/${  URLS.shift()  }.jpg`,
  description: getRandomArrayElement (DESCRIPTIONS),
  likes: getRandomPositiveInteger (15, 200),
  comments: createComment(),
});

const similarObjects = Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);

console.log(similarObjects);
