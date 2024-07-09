// Arreglos globales para reemplazos y sustitutos
const vocales = ['e', 'i', 'a', 'o', 'u'];
const claves = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Función para encriptar el mensaje
function encriptar(mensaje) {
   let mensajeEncriptado = "";
   for (let i = 0; i < mensaje.length; i++) {
      let reemplazado = false;
      for (let j = 0; j < vocales.length; j++) {
         if (mensaje[i] === vocales[j]) {
            mensajeEncriptado += claves[j];
            reemplazado = true;
            break;
         }
      }
      if (!reemplazado) {
         mensajeEncriptado += mensaje[i];
      }
   }
   return mensajeEncriptado;
}

// Función para desencriptar el mensaje
function desencriptar(mensajeEncriptado) {
   let mensaje = "";
   for (let i = 0; i < mensajeEncriptado.length; i++) {
      let reemplazado = false;
      for (let j = 0; j < claves.length; j++) {
         if (mensajeEncriptado.substring(i, i + claves[j].length) === claves[j]) {
            mensaje += vocales[j];
            i += claves[j].length - 1;
            reemplazado = true;
            break;
         }
      }
      if (!reemplazado) {
         mensaje += mensajeEncriptado[i];
      }
   }
   return mensaje;
}

//Funcion de borrar elementos

function displayOutput() {
   document.querySelector('.output-img').style.display = 'none';
   document.querySelector('.output-title').style.display = 'none';
   document.querySelector('.output-text').style.fontSize = '24px';
   document.querySelector('.output-text').style.marginTop = '24px';
   document.querySelector('.copy-btn').style.display = 'inline-block';
   document.querySelector('.output').style.justifyContent = 'space-between';
}

//Funcion para copiar
function copyText() {
   let copyTo = document.querySelector('.output-text').textContent;
   navigator.clipboard.writeText(copyTo)
}

// Event listeners para los botones
document.querySelector('.encrypt').addEventListener('click', function (event) {
   event.preventDefault();
   let textarea = document.querySelector('textarea');
   let mensaje = textarea.value;
   let resultado = encriptar(mensaje);
   document.querySelector('.output-text').textContent = resultado;
   displayOutput();
});

document.querySelector('.decrypt').addEventListener('click', function (event) {
   event.preventDefault();
   let textarea = document.querySelector('textarea');
   let mensajeEncriptado = textarea.value;
   let resultado = desencriptar(mensajeEncriptado);
   document.querySelector('.output-text').textContent = resultado;
   displayOutput();
});

document.querySelector('.copy-btn').addEventListener('click', function (event) {
   event.preventDefault();
   copyText();
})