import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

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

const DESCRIPTIONS =[
  'Лучший день',
  'Я на море',
  'Positive vibes',
  'Per aspera ad astra',
];

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

const MESSAGES =[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Кристинааааа',
  'Маринааааа',
  'Джаред Лето',
  'Эд Ширан',
  'Тейлор Свифт',
  'Селена Гомез',
  'The Weeknd',
];

const createComment = () => ({
  id: COMMENT_IDS.shift(),
  avatar: `img/avatar-${  getRandomPositiveInteger (1, 6)  }.svg`,
  message: getRandomArrayElement (MESSAGES),
  name: getRandomArrayElement (NAMES),
});


const SIMILAR_OBJECT_COUNT = 25;



const createObject = () => {
  const pictures = [];
  for (let i = 1; i <= 25; i++) {
    const picture = {
      id: IDS.shift(),
      url: `photos/${  URLS.shift()  }.jpg`,
      description: getRandomArrayElement (DESCRIPTIONS),
      likes: getRandomPositiveInteger (15, 200),
      comments: createComment(),
    }
    pictures.push(picture);
  }
  return pictures;
};


// const createObject = () => {
//   Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);
// };


export {createObject};
