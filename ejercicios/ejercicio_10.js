const info = document.getElementById("info");

// Seleccionar un elemento para iniciar navegación
const parrafo2 = document.getElementById("parrafo2");

// Acceder al padre
const padre = parrafo2.parentElement;

// Acceder a los hijos del padre
const hijos = padre.children;

// Acceder al siguiente hermano de parrafo2
const siguienteHermano = parrafo2.nextElementSibling;

// Preparar texto para mostrar
let texto = "";

texto += `Elemento seleccionado: ${parrafo2.tagName} con id="${parrafo2.id}"\n\n`;

texto += `Padre del elemento:\n - ${padre.tagName} con id="${padre.id}"\n\n`;

texto += `Hijos del padre:\n`;
for (let i = 0; i < hijos.length; i++) {
  texto += ` - ${hijos[i].tagName} con id="${hijos[i].id}"\n`;
}
texto += "\n";

texto += `Siguiente hermano de parrafo2:\n - ${siguienteHermano.tagName} con id="${siguienteHermano.id}"\n`;

info.textContent = texto;
