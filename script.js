var texto = document.querySelector("#IngresoTexto");
var encriptado = document.querySelector("#encriptado");
var botonEncriptar = document.querySelector("#boton_encriptar");
var botonDesencriptar = document.querySelector("#boton_desencriptar");
var botonCopiar = document.querySelector("#boton_copiar");
var letras = ["a","e","i", "o", "u"];
var codigos = ["ai", "enter", "imes", "ober", "ufat"];
var acentos = ["Á", "É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú", "A", "E", "I", "O", "U"];
var sinAcentos = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];


function encriptar(){
    //console.log(texto.value);
    var arrayTextoEncriptado = [];
    for (let i of texto.value){
        arrayTextoEncriptado.push(i);
    }
    //console.log(arrayTextoEncriptado);
    for(var x=0; x<arrayTextoEncriptado.length; x++){
        for(var y=0; y<acentos.length; y++){
            if(arrayTextoEncriptado[x] == acentos[y]){
                arrayTextoEncriptado[x] = sinAcentos[y];
            }
        }
    }
    //console.log(arrayTextoEncriptado.join(""));

    for(var x=0; x<arrayTextoEncriptado.length; x++){
        for(var y=0; y<letras.length; y++){
            if(arrayTextoEncriptado[x] == letras[y]){
                arrayTextoEncriptado[x] = codigos[y];
            }
        }
    }
    //console.log(arrayTextoEncriptado.join(""));
    encriptado.value=arrayTextoEncriptado.join("");
    texto.value="";
    texto.focus();
}

function desencriptar(){
    //console.log(texto.value);
    var fraseDesencriptada;
    for(var x= 0; x<letras.length; x++){
        if(x == 0){
            fraseDesencriptada=texto.value.replaceAll(codigos[x], letras[x]);
        }
        if(x > 0){
            fraseDesencriptada = fraseDesencriptada.replaceAll(codigos[x], letras[x])
        }
    }
    encriptado.value = fraseDesencriptada;
    texto.value="";
    texto.focus();
    //console.log(fraseDesencriptada);
}

function copiar(){
    encriptado.select();
    document.execCommand("copy");
}

botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;
botonCopiar.onclick=copiar;


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/