import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);



galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer = addEventListener('click', onItemClickAction);

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
function onItemClickAction (event) {
  if(!event.target.classList.contains('gallery__item')){
    return;
    };
};