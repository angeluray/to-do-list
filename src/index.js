import './style.css';

let counter = -1;

// HTML Management
const container = document.querySelector('.myListContainer');
container.innerHTML = '<h1>Today\'s To-Do\'s</h>';
const list = document.createElement('ol');
list.classList.add('list');
const input = document.createElement('div');
input.classList.add('input');
container.appendChild(input);
container.appendChild(list);
list.insertAdjacentHTML('afterend', '<button type="button" id="clearAllBtn">Clear all completed</button>');

input.innerHTML = `
<input type="text" id="toDo" placeholder="Add to your list..." required>
`;

const eachList = [];

class NewItemList {
  constructor(listInfo, mybool, listIndex) {
    this.listInfo = listInfo;
    this.myBool = mybool;
    this.listIndex = listIndex;
  }
}

const printDynamic = (input) => {
  document.getElementsByClassName('list')[0].innerHTML = input.map((items, index) => `
  <li id="${index}"><input type="checkbox">${items.listInfo}</li>`).join('');
};

const addNewList = () => {
  counter += 1;
  const toDo = document.getElementById('toDo').value;
  const eachItemList = new NewItemList(toDo, false, counter);
  // Push into the array
  eachList.push(eachItemList);

  // print in the HTML file.
  printDynamic(eachList);
  return eachList;
};

document.getElementById('toDo').addEventListener('keypress', (e) => {
  const toDo = document.getElementById('toDo').value;
  if (e.key === 'Enter' && toDo !== '') {
    addNewList();
    document.getElementById('toDo').value = '';
  }
});