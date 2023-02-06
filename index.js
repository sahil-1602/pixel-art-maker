const container = document.querySelector('.container');
const sizeEle = document.querySelector('.size');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.button');

let size = sizeEle.value;
let draw = false;

function addGrid() {
  container.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('box');

    div.addEventListener('mouseover', () => onMouseOver(div));
    div.addEventListener('mousedown', () => onMouseDown(div));

    container.appendChild(div);
  }
}

function resetGrid() {
  let divs = document.getElementsByClassName('box');
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '#393939';
  }
}

function onMouseOver(div) {
  if (!draw) return;
  div.style.backgroundColor = color.value;
}

function onMouseDown(div) {
  div.style.backgroundColor = color.value;
}

window.addEventListener('mousedown', function () {
  draw = true;
});

window.addEventListener('mouseup', function () {
  draw = false;
});

resetBtn.addEventListener('click', function () {
  resetGrid();
});

sizeEle.addEventListener('change', function () {
  size = sizeEle.value;
  container.innerHTML = '';
  addGrid();
});

addGrid();
