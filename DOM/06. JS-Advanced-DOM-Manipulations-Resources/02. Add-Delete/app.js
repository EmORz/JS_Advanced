function addItem() {

    debugger
    let inputElement = document.getElementById('newText').value;
let newItem = document.createElement('li');
newItem.textContent = inputElement+' ';

let delLink = document.createElement('a');
delLink.href = '#';
delLink.textContent = '[Delete]';
delLink.addEventListener('click', function () {
    let itemDel = this.parentElement;
    itemDel.parentElement.removeChild(itemDel);
})
newItem.appendChild(delLink);

let unorderList = document.getElementById('items').appendChild(newItem);
}