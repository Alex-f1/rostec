function initNewHeroSlider() {
  const newHeroSlider = new Swiper(".js-new-hero-slider", {
    effect: "fade",
    speed: 1000,
    allowTouchMove: false,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesProgress: true
  });
  const newHeroSliderName = new Swiper(".js-new-hero-slider-name", {
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
      el: ".new-hero .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span></span>' + '</span>';
      },
    },
    thumbs: {
      swiper: newHeroSlider
    },
    breakpoints: {
      320: {
        spaceBetween: 35
      },

      768: {
        spaceBetween: 65
      },
    }
  });

  var image = document.querySelectorAll('img.parallax-image');
  var instance = new simpleParallax(image, {
    orientation: "down",
    scale: 1.2,
    overflow: true
  });
  
  if (window.matchMedia("(max-width: 1279px)").matches) {
    instance.destroy();
  }
 
}

if ($('.js-new-hero-slider').length) {
  initNewHeroSlider();
}

