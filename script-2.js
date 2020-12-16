let controls = document.getElementById('controls');
let input = document.getElementsByClassName('js-input')[0];
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
        const a = Math.random() * (255 - 0) + 0;
        const b = Math.random() * (255 - 0) + 0;
        const c = Math.random() * (255 - 0) + 0;
        divEl.style.background = `rgb(${a}, ${b}, ${c})`;
        boxes.appendChild(divEl);
    }
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

controls.onclick = (event) => {
  let action = event.target.dataset.action;
 
  if (action === 'create') {
    createBoxes(input.value)
  } else if(action === 'destroy') {
     destroyBoxes() 
  }
}
