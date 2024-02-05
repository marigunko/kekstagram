const fullSizePicture = document.querySelector('.big-picture');
const fullSizePictureImg = fullSizePicture.querySelector('.big-picture__img').querySelector('img');
const likes = fullSizePicture.querySelector('.likes-count');
const commentsNumber = fullSizePicture.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const comments = fullSizePicture.querySelector('.social__comments');
const description = fullSizePicture.querySelector('.social__caption');
const closeButton = fullSizePicture.querySelector('.big-picture__cancel');


const renderFullSizePicture = (post) => {
  fullSizePictureImg.src = post.url;
  description.textContent = post.description;
  likes.textContent = post.likes;
  commentsNumber.textContent = post.comments.length;
  for (const comment of comments.querySelectorAll('.social__comment')) {
    comment.remove();
  }
  for (const comment of post.comments) {
    const commentClone = commentTemplate.cloneNode(true);
    commentClone.querySelector('img').src = comment.avatar;
    commentClone.querySelector('img').alt = comment.name;
    commentClone.querySelector('.social__text').textContent = comment.message;
    comments.append(commentClone);
  }

  fullSizePicture.querySelector('.social__comment-count').classList.add('hidden');
  fullSizePicture.querySelector('.comments-loader').classList.add('hidden');
  fullSizePicture.classList.remove('hidden');
  document.body.classList.remove('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      fullSizePicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });

  closeButton.addEventListener('click', () => {
    fullSizePicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
};

export {renderFullSizePicture};