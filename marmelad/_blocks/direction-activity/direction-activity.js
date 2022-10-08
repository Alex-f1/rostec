function directionName() {
  $('.js-direction-other-name').on('click', function (event) {
    if (!$('.app--inner-page')) {
      event.preventDefault();
    }
    $(this).siblings('.js-direction-list').toggleClass('_is-show');
    $(this).closest('.direction-name').addClass('_is-fixed');
  });

  const getDirectionNameBlock = $('.direction-name').offset().top;

  /* $(window).on('scroll', function() {
    if ($(this).scrollTop() >= getDirectionNameBlock) {
      $('.direction-name').addClass('_is-fixed');
    } else {
      $('.direction-name').removeClass('_is-fixed');
    }
  }) */

  function navToAnchor() {
    $('.direction-name__list a').on('click', function (e) {
      e.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 100
      }, 1200);
      return false;
    });
  }

  if (!$('.app--inner-page')) {
    navToAnchor();
  }

  var positions = [],
    currentActive = null,
    links = $('.direction-name__list a');

  $('.direction-activity__direction').each(function () {
    positions.push({
      top: $(this).position().top - 150,
      a: links.filter('[href="#' + $(this).attr('id') + '"]')
    });
  });

  positions = positions.reverse();

  $(window).on('scroll', function () {
    $('.js-direction-list').removeClass('_is-show');
    var winTop = $(this).scrollTop();
    if (winTop >= getDirectionNameBlock) {
      $('.direction-name').addClass('_is-fixed');
    } else {
      $('.direction-name').removeClass('_is-fixed');
    }
    for (var i = 0; i < positions.length; i++) {
      if (positions[i].top < winTop) {
        if (currentActive !== i) {
          currentActive = i;
          links.closest('li').removeClass('_is-active');
          positions[i].a.closest('li').addClass("_is-active").siblings('li').removeClass('_is-active');

          let getThisText = positions[i].a.find('span').text();
          $('.direction-name h3').html(getThisText);
        }
        break;
      }
    }
  });
}


if ($('.js-direction-other-name').length) {
  directionName();
}