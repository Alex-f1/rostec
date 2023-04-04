function initMainNewsSlider() {
  var slidesOffsetAfter = $('.main-news--extra').length ? 30 : 0;


  var mainNewsSlider = new Swiper(".js-main-news-slider", {
    slidesPerView: "auto",
    // width: 305,
    spaceBetween: 30,
    speed: 1000,
    // slidesOffsetAfter: 150,
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
        centeredSlides: true,
        spaceBetween: 30
      },
      768: {
        centeredSlides: false,
        spaceBetween: 30
      },
    },
    /* on: {
      init: function () {
        if ($('.main-news--extra').length) {
          $(window).on('load resize', function () {
            const mainNewsContainer = $('.main-news__slider');
            let mainNewsInnerOffSetLeft = $('.main-news__inner').offset().left;

            mainNewsContainer.css('padding-right', mainNewsInnerOffSetLeft - 36);

          });
        }
      },
    }, */
  });
  function sliderResize() {
    if ($('.main-news__wrapper').width() >= 975) {
      $('.main-news__slider').css('max-width', 975);
    } else if ($('.main-news__wrapper').width() >= 670) {
      $('.main-news__slider').css('max-width', 640);
    } else if ($('.main-news__wrapper').width() >= 335) {
      $('.main-news__slider').css('max-width', 305);
    }
  }
  sliderResize();
  $(window).on('load resize', function () {
    sliderResize();
  });

}




if ($('.js-main-news-slider').length) {
  initMainNewsSlider();
}

