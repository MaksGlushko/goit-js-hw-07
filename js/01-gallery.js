import { galleryItems } from './galleryitems.js';
// // Change code below this line
import * as basicLightbox from 'basiclightbox';


const listEl = document.querySelector('.gallery')

const typset = galleryItems.map(({ preview, original, description }) => {
    return `<li  style="margin: 20px;" class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>` }).join('');

listEl.insertAdjacentHTML("beforeend", typset)

import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';



const modalOpen = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        console.log('NEpraça');
        return;
    }
    console.log('praça');
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;



    const instance = basicLightbox.create(
        `<img src='${clickedImageSrc}' alt='${clickedImageAlt}'/>`, {
        onShow: (instance) => {
            document.addEventListener('keydown', modalClose)
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', modalClose);
            instance = null;
        }
    });
    const modalClose = (event) => {
        if (event.key !== 'Escape') {
            return
        }
        return instance.close();
    }


    instance.show();
}




listEl.addEventListener('click', (event) => {
    modalOpen(event)
})

