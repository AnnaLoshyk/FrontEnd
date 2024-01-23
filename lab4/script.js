const idChanger = document.getElementById('first_changer');
const selectorChanger = document.querySelector('.second_changer');

function randomNum() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

const changeColorsById = () => {
  idChanger.style.background = randomColor();
  idChanger.style.color = randomColor();
};

const changeColorsQuerySelector = () => {
  selectorChanger.style.background = randomColor();
  selectorChanger.style.color = randomColor();
};

const addPic = () => {
  const element = document.getElementById('additionalImg');
  if (!element) {
    const element = document.createElement('img');
    element.id = 'additionalImg';
    element.src = 'Hyperborea.webp';
    element.style.width = '350px';
    element.style.height = '250px';
    bodyElem.appendChild(element);
  }
};

const increasePic = () => {
  const element = document.getElementById('additionalImg');
  if (element) {
    element.style.width = `${element.offsetWidth + 10}px`;
    element.style.height = `${element.offsetHeight + 10}px`;
  }
};

const reducePic = () => {
  const element = document.getElementById('additionalImg');
  if (element) {
    element.style.width = `${element.offsetWidth - 10}px`;
    element.style.height = `${element.offsetHeight - 10}px`;
  }
};

const removePic = () => {
  const element = document.getElementById('additionalImg');
  element && bodyElem.removeChild(element);
};

const deletePic = () => {
    const element = document.getElementById('additionalImg')
    if (element){
        element.remove()
    }
}

const bodyElem = document.querySelector('body');
const divButton = document.createElement('div');

const addButton = document.createElement('button');
addButton.innerHTML = 'Add';
addButton.onclick = addPic;

const increaseButton = document.createElement('button');
increaseButton.innerHTML = 'Increase';
increaseButton.onclick = increasePic;

const reduceButton = document.createElement('button');
reduceButton.innerHTML = 'Reduce';
reduceButton.onclick = reducePic;

const deleteButton = document.createElement('button')
deleteButton.innerHTML = 'Delete';
deleteButton.onclick = deletePic;

divButton.appendChild(addButton);
divButton.appendChild(increaseButton);
divButton.appendChild(reduceButton);
divButton.appendChild(deleteButton);

bodyElem.appendChild(divButton);
