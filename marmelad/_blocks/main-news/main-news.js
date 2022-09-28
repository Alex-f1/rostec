function initMainNewsSlider() {
  var mainNewsSlider = new Swiper(".js-main-news-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".main-news .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span></span>' + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        spaceBetween: 10
      },
      375: {
        centeredSlides: false,
        spaceBetween: 15
      },
      768: {
        centeredSlides: false,
        spaceBetween: 30
      },
    }
  });
}

if ($('.js-main-news-slider').length) {
  initMainNewsSlider();
}