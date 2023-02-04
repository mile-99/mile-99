const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hello world!';

let horario
horario = 1900
if (horario === 1900) {
    alert('Its time for bed');
} else {
    alert('It is not time for bed');
}

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
let MyGreeting = document.querySelector ('#opinion');
function SetNewUsername() {
    let NewUsername = prompt ('Please, enter your name pal...');
    if (!NewUsername) {
        SetNewUsername();
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