const caja = document.getElementById("caja");
const boton = document.getElementById("btnCambiar");

// Evento de clic en el botón
boton.addEventListener("click", () => {
  caja.textContent = "¡Contenido cambiado con clic!";
  caja.style.backgroundColor = "#a0e7e5";
});

// Evento mouseover 
caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "#ffdd94";
  caja.textContent = "¡Mouse sobre la caja!";
});

// Evento mouseout 
caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightgray";
  caja.textContent = "Pasa el mouse";
});
 