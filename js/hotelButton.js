const hotelButton = document.getElementById("hotelButton");

hotelButton.addEventListener("click", () => {
  const pdfUrl = 'https://drive.google.com/uc?export=view&id=1s1CUEMb1sRVB_tkg4yoQMCZOos08mQe1';
  window.open(pdfUrl, '_blank');
});
