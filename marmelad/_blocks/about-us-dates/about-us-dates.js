function initAboutUsSlider() {
  const aboutUsSlider = new Swiper(".js-about-us-slider", {
    effect: "fade",
    speed: 1000,
    allowTouchMove: false,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesProgress: true
  });
  const aboutUsSliderDates = new Swiper(".js-about-us-slider-dates", {
    slidesPerView: 'auto',
    speed: 800,
    loop: true,
    spaceBetween: 65,
    mousewheel: true,
    slideToClickedSlide: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    thumbs: {
      swiper: aboutUsSlider
    },
    breakpoints: {
      320: {
        centeredSlides: true,
        spaceBetween: 35,
        slidesOffsetBefore: 35,
      },
      960: {
        centeredSlides: false,
        spaceBetween: 65,
        slidesOffsetBefore: 0,
      },
    }
  });
}

if ($('.js-about-us-slider').length) {
  initAboutUsSlider();
}