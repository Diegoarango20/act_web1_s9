const formulario = document.getElementById("formulario");
const mensajeDiv = document.getElementById("mensaje");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validar campos vacíos
  if (nombre === "" || email === "") {
    mensajeDiv.textContent = "Por favor, completa todos los campos.";
    mensajeDiv.className = "error";
  } else {
    mensajeDiv.textContent = "Formulario enviado con éxito. ¡Gracias!";
    mensajeDiv.className = "exito";

    // Aquí podrías hacer algo más, como enviar datos a un servidor
    formulario.reset(); 
  }
});
