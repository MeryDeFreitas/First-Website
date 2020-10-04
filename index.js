var numero = 1

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