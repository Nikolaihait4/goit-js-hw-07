import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

// console.log(galleryItems);

const galleryItemUl = document.querySelector(".gallery");

// Мэпаем массив записываем в переменную добавляем разметку

const galleryEl = galleryItems
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

galleryItemUl.insertAdjacentHTML("beforeend", galleryEl);

// Добавляем слушателя событий

galleryItemUl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault(); //запрет на переход по ссылке

  if (!evt.target.classList.contains("gallery__image")) {
    return; // Проверяем на попадание по картинке по классу
  }
  // Создаем модальнрое окно с помощью библиотеки

  const modal = basicLightbox.create(
    `
		<img width="1920" height="1080" src="${evt.target.dataset.source}" alt="Image description">
	`,

    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress), //добаляем и удаляем слушателя событий
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  modal.show();

  function onEscKeyPress(evt) {
    if (evt.code === "Escape") {
      modal.close(); //проверка на Эскейп
    }
  }
}
