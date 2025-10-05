// Obtener los elementos
const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");
const boton = document.getElementById("cambiarBtn");

boton.addEventListener("click", () => {


  // Leer atributos actuales
  const srcActual = imagen.getAttribute("src");
  const hrefActual = enlace.getAttribute("href");

  console.log("SRC actual:", srcActual);
  console.log("HREF actual:", hrefActual);


  // Cambiar atributos
  
  imagen.setAttribute("src", "https://via.placeholder.com/300x150");
  imagen.setAttribute("alt", "Imagen modificada");

  enlace.setAttribute("href", "https://developer.mozilla.org/es/");
  enlace.textContent = "Ir a MDN Web Docs";
});
