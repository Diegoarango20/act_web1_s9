// Seleccionar el elemento y los botones
const titulo = document.getElementById("titulo");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnAlternar = document.getElementById("btnAlternar");

// Agregar clase
btnAgregar.addEventListener("click", () => {
  titulo.classList.add("resaltado");
});

// Quitar clase
btnQuitar.addEventListener("click", () => {
  titulo.classList.remove("resaltado");
});

// Alternar clase
btnAlternar.addEventListener("click", () => {
  titulo.classList.toggle("marco");
});
