import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);
const refs = {
  galeryOne: document.querySelector(".gallery"),
};
const readyGal = createGalery(galleryItems);
refs.galeryOne.insertAdjacentHTML("afterbegin", readyGal);

refs.galeryOne.addEventListener("click", mooveToModal);

function mooveToModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  //   console.log(event.target);
  const newHref = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${newHref}" width="800" height="600">
  `);

  instance.show();
  //   console.log(newHref);
}

// console.log(createGalery(galleryItems));
function createGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    .join("");
}
