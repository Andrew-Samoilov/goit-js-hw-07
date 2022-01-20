import { galleryItems } from './gallery-items.js';

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

// console.table(galleryItems);
// console.log(gall);

const onGalleryClick = (event) => {
    const isImg = event.target.classList.contains('gallery__image');
    console.log(`isImg  ${isImg}`);
    if (!isImg) return;
    event.preventDefault();

    const onModalEscClose = (event) => {
        console.log("Keydown: ", event.key);
        if (event.key === 'Escape') {
            console.log(`modalEscClose Escape`);
            instance.close(() => {
                document.removeEventListener("keydown", onModalEscClose);
                console.log('lightbox not visible anymore');
            });
        }
    };


    // console.log("Dataset.source ", event.target.dataset.source);
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="100%" height="100%">
    </div>
	`);

    instance.show();
    document.addEventListener("keydown", onModalEscClose);

}


gall.addEventListener("click", onGalleryClick);
// gall.addEventListener("click", (event) => {
//     const isImg = event.target.classList.contains('gallery__image');
//     if (!isImg) return;
//     event.preventDefault();

//     // console.log("Dataset.source ", event.target.dataset.source);
//     const instance = basicLightbox.create(`
//     <div class="modal">
//     <img src="${event.target.dataset.source}" width="100%" height="100%">
//     </div>
// 	`);

//     instance.show();
//     document.addEventListener("keydown", onModalEscClose());
//     // document.addEventListener("keydown", ev => {
//     //     // console.log("Keydown: ", event);
//     //     if (ev.key === 'Escape') {
//     //         // console.log(`Escape Escape`);
//     //         instance.close(() => {
//     //             document.removeEventListener("keydown", () => console.log(`Remove event listener`));
//     //             console.log('lightbox not visible anymore');
//     //         });
//     //     }
//     // });

// });
