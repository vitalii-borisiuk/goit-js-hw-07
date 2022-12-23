import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', inModalOpen);

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
}
function onItemClickAction (event) {
  if(!event.target.classList.contains('gallery__item')){
    return;
  }
  console.log(event.target);
};

function inModalOpen() {
  const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

  instance.show();
  
};