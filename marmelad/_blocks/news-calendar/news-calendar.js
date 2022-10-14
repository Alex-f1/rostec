function newsCalendar() {
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
}

newsCalendar();

function popupNewsDay() {

  if (window.matchMedia("(min-width: 1024px)").matches) {
    $('.popup-news-day').addClass('_is-show');
  } 
  $('.news-calendar--media .news-calendar__cell-day').on('click', function () {
    $(this).addClass('_is-selected-date').siblings().removeClass('_is-selected-date');
    $('.popup-news-day').addClass('_is-show');
  })

  $('.js-popup-news-day-button-close').on('click', function () {
    $('.popup-news-day').removeClass('_is-show');
    $('.news-calendar--media .news-calendar__cell-day').removeClass('_is-selected-date');
  })
}

popupNewsDay();