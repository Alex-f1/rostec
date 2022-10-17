function sortNews() {
  $('.js-choice-category').on('click', function () {
    $(this).toggleClass('_is-active');
    $('.js-news-categories').toggleClass('_is-show');
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest('.sorting-panel__form').length) {
      return;
    }
    $('.js-choice-category').removeClass('_is-active');
    $('.js-news-categories').removeClass('_is-show');
  });


  $('.js-news-category').on('click', function () {

    $(this).addClass('_is-checked').siblings().removeClass('_is-checked');
    let newsCategory = $(this).data('category');

    $('.js-choice-category > span').html(newsCategory);

  });

  new AirDatepicker('.js-choice-date', {
    autoClose: true,
    position: 'bottom left',
  });
}

if ($('.news-list').length) {
  sortNews();
}