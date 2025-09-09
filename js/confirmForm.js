document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("ti8wyB4s-TJNWLkkx");

const form = document.getElementById("confirmForm");
const toastMail = document.getElementById("toastMail");
const loader = document.getElementById("loader");
const busSelectContainer = document.getElementById("busSelectContainer");

form.addEventListener("change", (e) => {
  if (e.target.name === "usaTransporte") {
    busSelectContainer.style.display = e.target.value === "si" ? "block" : "none";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    companionName: form.companionName.value,
    allergy: form.allergy.value,
    usaTransporte: form.usaTransporte.value || "",
    bus: form.bus.value || ""
  };

  loader.style.display = "block";

  emailjs.send("service_t5uztoq", "template_it54idq", formData)
    .then(function(response) {
      loader.style.display = "none";
      showtoastMail("¡Confirmación enviada con éxito! ¡Mil gracias por acompañarnos en este día tan especial!");
      form.reset();
      busSelectContainer.style.display = "none";
    }, function(error) {
      loader.style.display = "none";
      showtoastMail("Upss.. Algo ha ido mal al enviar la confirmación. Por favor, inténtalo de nuevo.");
    });
});

function showtoastMail(message) {
  toastMail.textContent = message;
  toastMail.style.display = "block";
  setTimeout(() => {
    toastMail.style.display = "none";
  }, 3000);
}
});