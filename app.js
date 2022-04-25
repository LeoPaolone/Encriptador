function encriptar(){
   var texto = document.querySelector("#texto-encriptar").value;
   var textoCifrado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.querySelector("#texto-encriptar").value = textoCifrado;
    document.querySelector("#texto-encriptar").value;
    document.getElementById("texto-respuesta").innerHTML =
    textoCifrado;
}

var button1 = document.querySelector("#Encriptar");
button1.onclick = encriptar;

function desencriptar(){
     var texto = document.querySelector("#texto-encriptar").value;
     var textoDecifrado = texto.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");
     document.querySelector("#texto-encriptar").value = textoDecifrado;
     document.querySelector("#texto-encriptar").value;
     document.getElementById("texto-respuesta").innerHTML = textoDecifrado;
}

var button2 = document.querySelector("#Desencriptar");
button2.onclick = desencriptar;

