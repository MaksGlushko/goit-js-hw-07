import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    </li>
    `;
}).join('');

listEl.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});