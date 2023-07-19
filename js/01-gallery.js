import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

console.log(galleryItems);

const galleryItemUl = document.querySelector(".gallery");
// console.log(galleryItemUl);

const markupCreateGalleryItem = createGalleryItem(galleryItems.original);
// console.log(markupCreateGalleryItem);

galleryItemUl.innerHTML = markupCreateGalleryItem;

galleryItemUl.addEventListener("click", onClick);

function createGalleryItem(item) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
  console.log(item);
}

function onClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  //   console.log(evt.target.dataset.source);
  basicLightbox
    .create(
      `
		<img width="1920" height="1080" src="${evt.target.dataset.source}">
	`
    )
    .show();
}
