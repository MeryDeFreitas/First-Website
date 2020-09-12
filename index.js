var numero = 1

function adelante(){
    numero++;
    if(numero>9)
        numero=1
        var Dibujo=document.getElementById("Captura")
        Dibujo.src="Dibujos/Captura"+numero+".JPG";
}

function atras(){
    numero--;
    if(numero<1)
        numero=9
        var Dibujo=document.getElementById("Captura")
        Dibujo.src="Dibujos/Captura"+numero+".JPG";
}