// Seleccionar todos los elementos con la clase 'resaltado'
const elementos = document.getElementsByClassName("resaltado");

// Cambiar el estilo de todos esos elementos
for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.backgroundColor = "#fce38a";  
  elementos[i].style.color = "#333";               
  elementos[i].style.padding = "10px";
  elementos[i].style.marginBottom = "5px";
}

const cantidad = elementos.length;

// Mostrar la cantidad en un elemento del documento
const contador = document.getElementById("contador");
contador.textContent = `Hay ${cantidad} elementos con la clase "resaltado".`;
