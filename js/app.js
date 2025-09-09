// Inicialización de EmailJS en vanilla JS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu clave pública de EmailJS
})();

function sendMail() {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  }).then(function(response) {
    alert("Correo enviado!");
  }, function(error) {
    alert("Error: " + JSON.stringify(error));
  });
}
