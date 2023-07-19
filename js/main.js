// import candidatesItems from "./../libs/candidadesItems.mjs";

$(".slider__inner, .news__slider").slick({
  infinite: false,
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        infinite: true,
        dots: true,
      },
    },
  ],
});

$("select").styler({});

// Управление модальным окном
function modalOpen() {
  const bodyRef = document.body;
  const modalWindowRef = document.querySelector("#modal");
  const menuIconRef = document.querySelector("#menu-icon");
  const menuRef = document.querySelector("#menu");

  window.addEventListener("click", (event) => {
    if (menuRef.classList.contains("active")) return;
    if (
      event.target.dataset.src === "#modal" ||
      event.target.closest("#model__btn-close") ||
      event.target.getAttribute("id") === "modal"
    ) {
      modalWindowRef.classList.toggle("none");
      bodyRef.classList.toggle("no-scroll");
      bodyRef.style.paddingRight = "17px";
    }

    if (modalWindowRef.classList.contains("none") && !menuIconRef.classList.contains("js-menu-icon-active")) {
      bodyRef.style.paddingRight = "0px";
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!modalWindowRef.classList.contains("none") && event.key === "Escape") {
      modalWindowRef.classList.add("none");
      bodyRef.classList.remove("no-scroll");
      bodyRef.style.paddingRight = "0px";
    }
  });
}
modalOpen();

// Управление бургер меню
function btnToggle() {
  const bodyRef = document.body;
  const menuIconRef = document.querySelector("#menu-icon"); // Элементы гамбургер меню
  const menuRef = document.querySelector("#menu"); // Навигация
  const navListRef = document.querySelector(".nav__list");
  // console.log(navListRef);

  window.addEventListener("click", (event) => {
    if (event.target.closest("#nav__btn-toggle")) {
      menuIconRef.classList.toggle("js-menu-icon-active");
      menuRef.classList.toggle("active");
      bodyRef.classList.toggle("no-scroll");

      if (menuRef.classList.contains("active")) {
        bodyRef.style.paddingRight = "17px";
      } else {
        bodyRef.style.paddingRight = "0px";
      }
    }

    if (!event.target.closest(".header__content")) {
      return;
    }

    if ((event.target.matches("a") && event.target.closest(".nav__list")) || event.target.classList.contains("nav__list")) {
      menuIconRef.classList.remove("js-menu-icon-active");
      menuRef.classList.remove("active");
      bodyRef.classList.remove("no-scroll");
      navListRef.classList.remove("menu-nav-open");
      navListRef.classList.add("menu-nav-close");
      bodyRef.style.paddingRight = "0px";
    }
  });
}
btnToggle();
