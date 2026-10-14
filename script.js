// Lightweight JS for year update and smooth interactions
document.addEventListener('DOMContentLoaded', () => {
  // Update year dynamically
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Log confirmation of load
  console.log("W. Judu Hudson's Neo-Brutalist Portfolio initialized.");
});
