import { similarObjects } from './data';

const pictureContainer = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const createPictureElement  = document.createDocumentFragment();

const renderPictures = () => {
  for (const post of similarObjects()) {
    const picture = pictureContainer.cloneNode(true);
    const pictureImage = picture.querySelector('.picture__img');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');
    pictureImage.src = post.url;
    pictureLikes.textContent = post.likes;
    pictureComments.textContent = post.comments.length;
    createPictureElement .append(picture);
  }
  pictures.append(createPictureElement );
};

export {renderPictures};