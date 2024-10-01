import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// navbar
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded");

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPath = window.location.pathname;

  console.log("Current path:", currentPath);

  navLinks.forEach(link => {
      const href = link.getAttribute('href');
      console.log("Checking link:", href);
      
      // 移除所有鏈接的 active 類
      link.classList.remove('active');
      link.removeAttribute('aria-current');

      // 檢查當前路徑是否以鏈接的 href 結尾
      if (currentPath.endsWith(href) || 
          (currentPath.endsWith('/') && href === 'index.html')) {
          console.log("Setting active:", href);
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
      }
  });
});
// 首頁-banner
var bannerSwiper = new Swiper(".banner-swiper", {
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// 首頁-熱門課程
var hotSwiper = new Swiper(".hot-Swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
  });
// 首頁-學員好評
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
  });