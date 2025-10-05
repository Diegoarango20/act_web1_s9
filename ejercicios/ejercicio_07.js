const btnCrear = document.getElementById("btnCrearLista");
const contenedor = document.getElementById("contenedorLista");

btnCrear.addEventListener("click", () => {
  // Limpiar contenido si ya hay una lista
  contenedor.innerHTML = "";

  // Crear la lista <ul>
  const lista = document.createElement("ul");

  // Crear y agregar 5 elementos <li>
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Elemento ${i}`;
    lista.appendChild(item);
  }

  // Agregar la lista al contenedor
  contenedor.appendChild(lista);
});
