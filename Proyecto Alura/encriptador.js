// Logica de encriptado/desencriptado, separada del HTML para poder testearla.
function encriptar(texto){
    let mensajeEncriptado = '';
    for(let i=0; i<texto.length; i++){ 
        if(texto[i] != 'a' && texto[i] != 'e' && texto[i] != 'i' && texto[i] != 'o' && texto[i] != 'u' ){
            mensajeEncriptado += texto[i];
        }  
        if(texto[i] == 'a'){
            mensajeEncriptado += "ai";
        }
        if(texto[i] == 'e'){
            mensajeEncriptado += "enter"
        }
        if(texto[i] == 'i'){
            mensajeEncriptado += "imes"
        }
        if(texto[i] == 'o'){
            mensajeEncriptado += "ober"
        }
        if(texto[i] == 'u'){
            mensajeEncriptado += "ufat"
            
        }
        
    }
    return mensajeEncriptado;

}

function desencriptar(texto) {
    let mensajeDesencriptado = '';
    for(let i = 0; i < texto.length; i++) { 
        if(texto[i] != 'a' && texto[i] != 'e' && texto[i] != 'i' && texto[i] != 'o' && texto[i] != 'u' ) {
        mensajeDesencriptado += texto[i];
        } else {
        if(texto[i] == 'a') {
            mensajeDesencriptado += "a";
            i += 1;
        } else if(texto[i] == 'e') {
            mensajeDesencriptado += "e"
            i += 4;
        } else if(texto[i] == 'i') {
            mensajeDesencriptado += "i"
            i += 3;
        } else if(texto[i] == 'o') {
            mensajeDesencriptado += "o"
            i += 3;
        } else if(texto[i] == 'u') {
            mensajeDesencriptado += "u"
            i += 3;
        }
        }
    }
    return mensajeDesencriptado;
    }

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { encriptar, desencriptar };
}
