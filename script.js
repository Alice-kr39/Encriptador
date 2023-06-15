
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const codigo = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let textoEncriptado = stringEncriptada.toLowerCase();
    
    for (const letra in codigo) {
        const sustitucion = codigo[letra];
        textoEncriptado = textoEncriptado.replaceAll(letra, sustitucion);
    }

    return textoEncriptado;
}

function desencriptar(stringDesencriptada) {
    let textoDesencriptado = stringDesencriptada.toLowerCase();

    for (const letra in codigo) {
        const sustitucion = codigo[letra];
        textoDesencriptado = textoDesencriptado.replaceAll(sustitucion, letra);
    }

    return textoDesencriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

