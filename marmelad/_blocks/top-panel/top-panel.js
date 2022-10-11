$('.js-button-burger').on('click', function () {
  $(this).toggleClass('_is-active');
  $('.full-menu').toggleClass('_is-show');
});

$('.js-button-search').on('click', function (event) {
  event.preventDefault();
  $('.top-panel .search-panel').addClass('_is-show');
});

$('.js-button-language').on('click', function (event) {
  event.preventDefault();
  $(this).closest('.top-panel__language').toggleClass('_is-active');
  $('.js-language-selection').toggleClass('_is-show');
});
$(document).on('click', function (e) {
  if ($(e.target).closest('.top-panel__language').length) {
    return;
  }
  $('.top-panel__language').removeClass('_is-active');
  $('.js-language-selection').removeClass('_is-show');
});

$('.js-button-close').on('click', function (event) {
  $('.top-panel .search-panel').removeClass('_is-show');
});


$('.full-menu').css('display', 'flex');
$('.top-panel .search-panel').show();