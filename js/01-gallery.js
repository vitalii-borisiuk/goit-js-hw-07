import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onItemClickAction);




function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
    {
   return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>`;
    })
        .join('');
};


function onItemClickAction(event) {
  blockDefaultAction(event);

  if (event.target.nodeName !== "IMG") {
    return;
  };
 
  const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`);
  instance.show();


  window.addEventListener('keydown', onKeypress);
function onKeypress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  };
};

};

function blockDefaultAction(evt) {
  evt.preventDefault();
};


