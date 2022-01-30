//cargo-slider
const cargo = document.querySelector('.cargo');
let i = 0;
for (let li of cargo.querySelectorAll('.cargo__card-item')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 183; // ширина картинки
let count = 1.5; // счетчик изображений
let list = cargo.querySelector('.cargo__card-container');
let listElems = cargo.querySelectorAll('.cargo__card-item');

let position = 0; // положение ленты прокрутки

cargo.querySelector('.cargo__swipe-left').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

cargo.querySelector('.cargo__swipe-right').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};