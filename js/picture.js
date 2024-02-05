import { renderFullSizePicture } from './fullsizepicture.js';
import { createObject } from './data.js';

const pictureContainer = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const createPictureElement  = document.createDocumentFragment();

const renderPictures = (posts) => {
  for (const post of posts) {
    const picture = pictureContainer.cloneNode(true);
    picture.querySelector('.picture__img').src = post.url;
    picture.querySelector('.picture__likes').src = post.likes;
    picture.querySelector('.picture__comments').src = post.comments.length;
    picture.querySelector('.picture__img').alt = post.description;
    picture.addEventListener('click', () => {
      renderFullSizePicture(post);
    });
    createPictureElement .append(picture);
  }
  pictures.append(createPictureElement);
};

export {renderPictures};