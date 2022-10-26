function directionsList() {
  $('.js-directions-list li').each(function () {
    const thisElem = $(this);
  
    thisElem.on('mouseenter', function() {
      const findLink = thisElem.find('a');
      const imgsBg = $('.js-directions-bg').find('img');
      const imgs = $('.js-directions-img').find('img');
      
      findLink.parent().addClass('_is-active').siblings('li').removeClass('_is-active');
      imgsBg.removeClass('_is-show').eq($(this).index()).addClass('_is-show');
      imgs.removeClass('_is-show').eq($(this).index()).addClass('_is-show');
    
    }); 
  });
}
if (window.matchMedia("(max-width: 1279px)").matches) {
  $('.js-directions-list li').removeClass('_is-active')
}
if ($('.js-directions-list').length && window.matchMedia("(min-width: 1280px)").matches) {
  directionsList();
}