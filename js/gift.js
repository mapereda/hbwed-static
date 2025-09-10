const bankAccount = document.getElementById("bankAccount");
const copyButton = document.getElementById("copyButton");
const toast = document.getElementById("toast");

copyButton.addEventListener("click", () => {
  const text = bankAccount.textContent || "";
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.style.display = "block";
      // Cambiar icono temporalmente
      //copyButton.textContent = "";
      setTimeout(() => {
        toast.style.display = "none";
        //copyButton.textContent = "";
      }, 2000);
    })
    .catch(err => console.error("Error al copiar: ", err));
});
