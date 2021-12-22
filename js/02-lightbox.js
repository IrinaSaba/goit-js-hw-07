import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const refs = {
  galeryOne: document.querySelector(".gallery"),
};
const readyGal = createGalery(galleryItems);

refs.galeryOne.insertAdjacentHTML("afterbegin", readyGal);

// console.log(createGalery(galleryItems));
function createGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: "250ms",
  captionsData: "alt",
});
lightbox.close();
