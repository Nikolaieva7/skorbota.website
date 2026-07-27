// ===============================
// БУРГЕР-МЕНЮ
// ===============================

const sidebar = document.getElementById("sidebarMenu");
const overlay = document.getElementById("menuOverlay");
const openBtn = document.getElementById("openMenuBtn");
const closeBtn = document.getElementById("closeMenuBtn");

function openMenu() {
  sidebar.classList.add("header__sidebar--active");
  overlay.classList.add("header__overlay--active");
}

function closeMenu() {
  sidebar.classList.remove("header__sidebar--active");
  overlay.classList.remove("header__overlay--active");
}

if (openBtn && closeBtn && sidebar && overlay) {
  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ===============================
// АКТИВНИЙ ПУНКТ МЕНЮ
// ===============================

const currentSection = document.body.dataset.section;

document.querySelectorAll(".header__link").forEach((link) => {
  if (link.id === currentSection) {
    link.classList.add("active");
  }
});

// ===============================
// SWIPER БЛОГУ
// ===============================

if (document.querySelector(".blogSwiper")) {
  new Swiper(".blogSwiper", {
    loop: true,

    navigation: {
      nextEl:
        ".blogSwiper ~ .swiper-button-next, .blogSwiper .swiper-button-next",
      prevEl:
        ".blogSwiper ~ .swiper-button-prev, .blogSwiper .swiper-button-prev",
    },

    pagination: {
      el: ".blogSwiper .swiper-pagination",
      clickable: true,
    },

    spaceBetween: 30,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });
}

// ===============================
// SWIPER ГАЛЕРЕЇ
// ===============================

if (document.querySelector(".gallerySwiper")) {
  new Swiper(".gallerySwiper", {
    loop: true,

    navigation: {
      nextEl: ".gallery .swiper-button-next",
      prevEl: ".gallery .swiper-button-prev",
    },

    spaceBetween: 20,

    touchStartPreventDefault: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

// ===============================
// GLIGHTBOX
// ===============================

if (typeof GLightbox !== "undefined" && document.querySelector(".glightbox")) {
  GLightbox({
    selector: ".glightbox",

    loop: true,

    autoplayVideos: true,

    openEffect: "zoom",

    slideEffect: "slide",
  });
}

AOS.init({
  duration: 800,
  easing: "ease-out",
  once: false,
  mirror: true,
  offset: 80,
});
