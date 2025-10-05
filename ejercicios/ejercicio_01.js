// Obtener el div donde se mostrará la información

const infoDiv = document.getElementById("info");

// Obtener el título y la URL del documento

const titulo = document.title;
const url = document.URL;

// Crear contenido HTML con esa información

const contenido = `
  <p><strong>Título de la página:</strong> ${titulo}</p>
  <p><strong>URL actual:</strong> ${url}</p>
`;

// Insertar el contenido en el div

infoDiv.innerHTML = contenido;
