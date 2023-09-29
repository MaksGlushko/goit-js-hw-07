import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const newImages = [];

const newFotoGallery = (object) => {
    object.map(({ preview, original, description }) => {
        newImages.push(`<li style="margin: 20px;" class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        loading="lazy"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </li>`);
    });
    gallery.insertAdjacentHTML('beforeend', newImages.join(''));
};

newFotoGallery(galleryItems);

function galleryModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        onShow: () => { window.addEventListener("keydown", onEsc) },
        onClose: () => { window.removeEventListener("keydown", onEsc) }
    });

    function onEsc(event) {
        if (event.code === 'Escape') {  
            instance.close(); 
        }
    }

    instance.show();
}

gallery.addEventListener("click", galleryModal);
