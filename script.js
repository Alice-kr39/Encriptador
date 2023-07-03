    // Obtener elementos del DOM
    const inputTexto = document.getElementById('input-texto');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const mensajeBox = document.getElementById('cajafnl');
    const texto1 = document.querySelector('.texto1');
    const texto2 = document.querySelector('.texto2');
    const btnCopy = document.getElementById('btn-copy');
    const msgOutput = document.getElementById('msg');

    // Mapeo de reemplazos
    const reemplazos = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
    };

    // Función para encriptar el texto
    function encriptarTexto() {
    const texto = inputTexto.value.toLowerCase();
    
    if (texto === '') {
        mostrarMensaje('Ingresa un texto para encriptar');
    } else if (!/^[a-z\s]+$/.test(texto)) {
        mostrarMensaje('El texto solo puede contener letras minúsculas y espacios');
    } else {
        const encriptado = texto
        .split('')
        .map(char => (reemplazos[char] ? reemplazos[char] : char))
        .join('');
        mostrarResultado(encriptado);
    }
    }

    // Función para desencriptar el texto
    function desencriptarTexto() {
    const texto = inputTexto.value.toLowerCase();
    
    if (texto === '') {
        mostrarMensaje('Ingresa un texto para desencriptar');
    } else if (!/^[a-z\s]+$/.test(texto)) {
        mostrarMensaje('El texto solo puede contener letras minúsculas y espacios');
    } else {
        const desencriptado = texto
        .split('')
        .map(char => {
            const reemplazo = Object.keys(reemplazos).find(key => reemplazos[key] === char);
            return reemplazo ? reemplazo : char;
        })
        .join('');
        mostrarResultado(desencriptado);
    }
    }

    // Función para mostrar el resultado en la caja de mensajes
    function mostrarResultado(texto) {
    mensajeBox.classList.add('visible');
    texto1.textContent = '';
    texto2.textContent = '';
    msgOutput.value = texto;
    }

    // Función para mostrar un mensaje de error
    function mostrarMensaje(mensaje) {
    mensajeBox.classList.add('visible');
    texto1.textContent = mensaje;
    texto2.textContent = '';
    msgOutput.value = '';
    }

    // Función para copiar el texto de salida al portapapeles
    function copiarTexto() {
    msgOutput.select();
    document.execCommand('copy');
    }

    // Eventos de clic
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopy.addEventListener('click', copiarTexto);


        // Función para limpiar el campo de texto
    function limpiarTexto() {
        inputTexto.value = '';
        mensajeBox.classList.remove('visible');
        msgOutput.value = '';
    }
    
    // Evento de clic para el botón de limpiar
    const btnLimpiar = document.getElementById('btn-limpiar');
    btnLimpiar.addEventListener('click', limpiarTexto);
    
