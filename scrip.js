let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Ativar/desativar áudio
document.getElementById('audio-toggle').addEventListener('click', function () {
  var video = document.getElementById('about-video');
  var audioStatus = video.muted;

  // Alterna entre ativar/desativar áudio
  video.muted = !audioStatus;

  // Altera o ícone do botão com base no estado do áudio
  if (video.muted) {
    this.textContent = '🔇'; // Áudio desativado
  } else {
    this.textContent = '🔊'; // Áudio ativado
  }
});

// Popup automático que fecha após 30 segundos
window.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupBalao");
  const fecharBtn = popup.querySelector(".popup-fechar");

  fecharBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Fecha automaticamente após 30 segundos
  setTimeout(() => {
    popup.style.display = "none";
  }, 30000);
});

// Tabela dinâmica (Contadores) no sobre.html

  

  // Fim Tabela dinâmica (Contadores) no sobre.html

// Menu de navegação
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Inicializar Swiper (Slides) para diferentes seções
var swiperHome = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperReview = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiperBlogs = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
