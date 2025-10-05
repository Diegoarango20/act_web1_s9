// Seleccionar elementos por ID
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("cambiarBtn");

// Agregar evento al botón

boton.addEventListener("click", () => {
  
 titulo.textContent = "Título cambiado con textContent";

  
  parrafo.innerHTML = 'Este párrafo ahora tiene <strong>HTML</strong> y <em>estilo</em>.';
});
