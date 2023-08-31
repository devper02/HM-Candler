// menu-burger
const menuBtn = document.querySelector(".btnMenu");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open");
});
// menu-burger/

// swiper slider
const swiperOne = new Swiper(".feedback__slider", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperTwo = new Swiper(".certificates-slider", {
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 4,
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// swiper slider/

// accardeon
const accardeonCloseNode = document.querySelectorAll("#acc-close");

accardeonCloseNode.forEach(function (i) {
  i.addEventListener("click", function () {
    const nextElement = i.nextElementSibling;
    if (nextElement) {
      nextElement.classList.toggle("hidden");
    }
  });
});
