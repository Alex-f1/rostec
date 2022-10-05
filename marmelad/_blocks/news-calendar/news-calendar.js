$('.js-choose-date').on('click', function (event) {
  event.preventDefault();
  $('.main-news').toggleClass('_is-show-news-calendar');
  $('.news-calendar').toggleClass('_is-show');
})

$('.js-active-year').on('click', function() {
  $(this).toggleClass('_is-active');
  $(this).siblings('.js-year-dropdown').toggleClass('_is-show');
});

$('.js-button-close').on('click', function () {
  $('.main-news').removeClass('_is-show-news-calendar');
  $('.news-calendar').removeClass('_is-show');
  $('.js-year-dropdown').removeClass('_is-show');
})

$('.news-calendar').show();
