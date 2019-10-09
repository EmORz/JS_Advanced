function addItem() {
    //        <input type="text" id="newItemText" />
//     <ul id="items">
//     <li>First</li>
//     <li>Second</li>
// </ul>
debugger
let inputElement = document.getElementById('newItemText').value;
let newItem = document.createElement('li');
newItem.textContent = inputElement;
let unorderList = document.getElementById('items').appendChild(newItem);




}