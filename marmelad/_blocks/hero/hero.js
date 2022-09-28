function initHeroSlider () {
  const heroSlider = new Swiper(".js-hero-slider", {
    effect: "fade",
    speed: 1000,
    allowTouchMove: false,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesProgress: true
  });
  const heroSliderName = new Swiper(".js-hero-slider-name", {
    slidesPerView: 'auto',
    loop: true,
    speed: 800,
    spaceBetween: 65,
    mousewheel: true,
    // slideToClickedSlide: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".hero .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span></span>' + '</span>';
      },
    },
    thumbs: {
      swiper: heroSlider
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        spaceBetween: 35
      },

      768: {
        centeredSlides: false,
        spaceBetween: 65
      },
    }
  });
}

if ( $('.js-hero-slider').length ) {
  initHeroSlider();
}