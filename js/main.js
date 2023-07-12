// menu-burger
const menuBtn = document.querySelector(".btnMenu");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open");
});
// menu-burger/
