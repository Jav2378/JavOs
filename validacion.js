function validarFormulario() {
    var password = document.getElementById("clave").value;
    var confirmarPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return false; // Evita que se envíe el formulario
    }
    
    return true; // Envía el formulario
  }  