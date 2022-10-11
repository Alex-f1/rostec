function choiceDirection() {
  let dataAllDirection = $('.js-choice-direction').data('all-direction');
  $('.js-choice-direction').on('click', function() {
    $(this).toggleClass('_is-active');
    $('.js-subscribe-directions').toggleClass('_is-show');
  });
  
  $(document).on('click', function (e) {
    if ($(e.target).closest('.subscribe-news__form').length) {
      return;
    }
    $('.js-choice-direction').removeClass('_is-active');
    $('.js-subscribe-directions').removeClass('_is-show');
  });
  
  let directions = [];

  $('.js-subscribe-direction').on('click', function () {
    
    $(this).toggleClass('_is-checked');
    
    if (!$(this).hasClass('_is-checked')) {
      for (let i = directions.length - 1; i >= 0; i--) {
        if (directions[i] == $(this).data('direction')) {
          directions.splice(i, 1);
    
          let joinDirection = directions.join(', ');
    
          $('.js-choice-direction > span').html(joinDirection.toString());
          $('.js-choice-direction > span').attr('data-choice-directions', joinDirection);
    
          break;
        };
      };
    } else {
      directions.push($(this).data('direction'));
    
      let joinDirection = directions.join(', ');
    
      $('.js-choice-direction > span').html(joinDirection.toString());
      $('.js-choice-direction > span').attr('data-choice-directions', joinDirection);
    }
    
    if ($('.js-choice-direction > span').html() == '') {
      $('.js-choice-direction > span').html(dataAllDirection);
    }

  });
}

if ($('.subscribe-news').length) {
  choiceDirection();
}