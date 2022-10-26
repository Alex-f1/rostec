let flagShow = 0;
$('.js-directions-list li a').on('mouseenter', function() {
  const thisElem = $(this);
  const getDataImg = thisElem.data('img');
  const getDataBg = thisElem.data('bg');
  const img = $('.js-directions-img').find('img');
  
  thisElem.parent().addClass('_is-active').siblings('li').removeClass('_is-active');
  
  
  $('.js-directions-bg').css('background-image', `url(${getDataBg})`);

  if (!thisElem.parent().hasClass('_is-current')) {
    thisElem.parent().addClass('_is-current');
    
    img.fadeOut(0, function () {
      $('.js-directions-img').removeClass('_is-active');
      img.attr('src', getDataImg);
      img.fadeIn(500);
    });   
    setTimeout(function() {
      $('.js-directions-img').addClass('_is-active');
      thisElem.parent().addClass('_is-current').siblings('li').removeClass('_is-current');
    }, 200);
  }
}); 

if (window.matchMedia("(max-width: 1279px)").matches) {
  $('.js-directions-list li').removeClass('_is-active')
}