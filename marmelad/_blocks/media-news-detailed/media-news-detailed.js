if ($('.js-gallery-content-slider').length) {
  var galleryContentSlider = new Swiper(".js-gallery-content-slider", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span></span>' + '</span>';
      },
    },
  });
}