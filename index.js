//Menu de Hamburguesa

const Menu = document.querySelector('.Menu');
const burgerButton = document.querySelector('#burger-menu');

// console.log(Menu)
// console.log(burgerButton)

function hideShow(){
    if(Menu.classList.contains('is-active')){
        Menu.classList.remove('is-active')
    } else{
        Menu.classList.add('is-active')
    }
}

burgerButton.addEventListener('click', hideShow)

//Mostrar Galeria de Dibujos
let numero = 1

function adelante(){
    numero++;
    if(numero>10)
        numero=1
        var Dibujo=document.getElementById("Captura")
        Dibujo.src="Dibujos/Captura"+numero+".JPG";
}

function atras(){
    numero--;
    if(numero<1)
        numero=10
        var Dibujo=document.getElementById("Captura")
        Dibujo.src="Dibujos/Captura"+numero+".JPG";
}