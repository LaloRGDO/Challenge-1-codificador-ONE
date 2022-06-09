const botonEncriptar = document.querySelector('#btnEncriptar');
const botonDesencriptar = document.querySelector('#btnDesencriptar');
const botonCopiar = document.querySelector('#btnCopiar');
var mensajeAEncriptar = document.querySelector('#mensajeAEncriptar');
var mensajeEncriptado = document.querySelector('#mensajeEncriptado');

botonEncriptar.addEventListener('click', ()=>{
    const fraseNueva = encriptarMensaje(mensajeAEncriptar.value);
    mensajeEncriptado.value = fraseNueva;
    mensajeAEncriptar.value = '';
});

botonDesencriptar.addEventListener('click', ()=>{
    const fraseNueva = desencriptarMensaje(mensajeAEncriptar.value);
    mensajeEncriptado.value = fraseNueva;
    mensajeAEncriptar.value = '';
});

botonCopiar.addEventListener('click', ()=>{
    mensajeEncriptado.select();
    document.execCommand("copy");
});

const encriptarMensaje = (frase) =>{
    frase = frase.split('');
    for(let i=0; i<frase.length; i++){
        switch(frase[i]){
            case 'a': frase[i]='ai';
            case 'A': frase[i]='ai';
            case 'á': frase[i]='ai';
            case 'Á': frase[i]='ai';break;
            case 'e': frase[i]='enter';
            case 'E': frase[i]='enter';
            case 'é': frase[i]='enter';
            case 'É': frase[i]='enter';break;
            case 'i': frase[i]='imes';
            case 'I': frase[i]='imes';
            case 'í': frase[i]='imes';
            case 'Í': frase[i]='imes';break;
            case 'o': frase[i]='ober';
            case 'O': frase[i]='ober';
            case 'ó': frase[i]='ober';
            case 'Ó': frase[i]='ober';break;
            case 'u': frase[i]='ufat';
            case 'U': frase[i]='ufat';
            case 'ú': frase[i]='ufat';
            case 'Ú': frase[i]='ufat';break;
        }
    }
    return frase.join("");
}

const desencriptarMensaje = (frase) =>{
    const regex = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<regex.length; i++){
        frase = frase.replaceAll(regex[i], vocales[i]);
    }
    return frase;
}




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