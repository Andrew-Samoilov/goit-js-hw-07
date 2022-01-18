import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeDivItemMarkup = img => {
    const { preview, original, description } = img;
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
}

const gall = document.querySelector('.gallery');
const makeDivItemRows = galleryItems
    .map(makeDivItemMarkup)
    .join('');

gall.insertAdjacentHTML("afterbegin", makeDivItemRows);

const aInDiv = document.querySelector(".gallery__link");
console.log(aInDiv);

aInDiv.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("event.target: ", event.target, "event.currentTarget: ", event.currentTarget);
});



console.table(galleryItems);
