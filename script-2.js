let controls = document.getElementById('controls');
let input = document.querySelector('.js-input');
const boxes = document.getElementById('boxes');

function createBoxes(amount) {
    let width = 20;
    let height = 20;

    for (let i = 0; i < amount; i++) {
        const divEl = document.createElement('div')
        width += 10;
        height += 10;
        divEl.style.width = `${width}px`;
        divEl.style.height = `${height}px`;
        const a = getRandomNumber();
        const b = getRandomNumber();
        const c = getRandomNumber();
        divEl.style.background = `rgb(${a}, ${b}, ${c})`;
        boxes.appendChild(divEl);
    }
}

function getRandomNumber() {
  return Math.random() * (255 - 0) + 0;
}

function destroyBoxes() {
    boxes.innerHTML = '';
    input.value = '';
}

controls.onclick = (event) => {
  let action = event.target.dataset.action;
 
  if (action === 'create') {
    createBoxes(input.value)
  } else if(action === 'destroy') {
     destroyBoxes() 
  }
}
