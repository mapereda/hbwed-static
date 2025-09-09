const scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", () => {
  scrollTopButton.style.display = (window.scrollY > 220) ? "block" : "none";
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
