const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hello world!';

function multiplica(num1, num2) {   //REVISAR
    let resultado = num1 * num2;
    return resultado;
}
multiplica(1, 2);       //REVISAR

/*document.querySelector(h3).onclick = function() {      //REVISAR
    alert('Nice lil cozy thing, is it not?')
}*/

let miFoto = document.querySelector('img');
miFoto.onclick = function () {
    let miSrc = miFoto.getAttribute('src');
    if (miSrc === 'images/cabin.jpg') {
      miFoto.setAttribute('src','images/woods.jpg');
    } else {
      miFoto.setAttribute('src', 'images/cabin.jpg');
    }
}

let MyButton = document.querySelector ('#myfirstbutton');
let MyGreeting = document.querySelector ('#welcome-message');
function SetNewUsername() {
    let NewUsername = prompt ('Please, enter your name pal...');
    if (!NewUsername) {
        let OldUsername = localStorage.getItem('nombre');
        MyGreeting.textContent = 'Hey there! Welcome back, ' + OldUsername;
    } else {
        localStorage.setItem('nombre', NewUsername);
        MyGreeting.innerHTML = 'Make yourself at home, ' + NewUsername;
      }
    }
if (!localStorage.getItem('nombre')) {
    SetNewUsername();
} else {
    let OldUsername = localStorage.getItem('nombre');
    MyGreeting.textContent = 'Hey there! Welcome back, ' + OldUsername;
}
MyButton.onclick = function() {
    SetNewUsername();
}

// REVISAR:
/*const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}*/