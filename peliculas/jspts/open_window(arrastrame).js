// Obtiene el botón que abre la nueva ventana
var boton = document.getElementById("miBoton");

// Agrega un evento de clic al botón
boton.onclick = function() {
  // Abre una nueva ventana con el video de YouTube
  window.open("https://drive.google.com/file/d/14RB0KXNIPh6h0qei3EBg4mKdi0gPZWcS/view?usp=share_link", "_blank");
}