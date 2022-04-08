const toggleMenu = document.querySelector(".toggle__menu");
const nav = document.querySelector(".nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
});
