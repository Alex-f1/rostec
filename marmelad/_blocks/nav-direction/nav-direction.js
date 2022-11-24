function fixedNavDirection() {
  const getPositionNavDirection = $('.nav-direction').offset().top;
  const getHeightNavDirection = $('.nav-direction').height();

  $(window).scroll(function () {
    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;

    if (newScroll >= getPositionNavDirection + getHeightNavDirection) {
      $('.nav-direction').css('transform', 'translateY(' + -100 + 'px)');
      $('.other-news').css('top', 15);
    } else {
      $('.nav-direction').css('transform', 'translateY(' + 0 + 'px)');
      $('.other-news').css('top', 120);
    }

    if (newScroll < oldScroll) {
      $('.nav-direction').css('transform', 'translateY(' + 0 + 'px)');
      $('.nav-direction').addClass('_is-fixed');
      $('.inner-header').css('padding-top', getHeightNavDirection);
      $('.other-news').css('top', 120);
    }
    
    if ($('.nav-direction__nav-last').hasClass('_is-active-last')) {
      $('.nav-direction').css('transform', 'translateY(' + 0 + 'px)');
    }

    this.oldScroll = newScroll;
    
    if (newScroll <= getPositionNavDirection) {
      $('.nav-direction').removeClass('_is-fixed');
      $('.inner-header').css('padding-top', 0);
      $('.other-news').css('top', 15);
    }
  });
}

function oneLineExtraMenu() {
  const textMoreMenuRu = 'Ещё';
  const textMoreMenuEn = 'More';
  
  $('.nav-direction').attr('data-language-text', textMoreMenuRu);
  
  let getTextMoreMenu = $('.nav-direction').data('language-text');
  
  const extraMenuList = $('.nav-direction').find('ul');
  extraMenuList.oneLineMenu({
    minWidth: 300,
    lastClass: 'nav-direction__nav-last',
  });

  $(window).on('load resize', function () {

    if ($('.nav-direction__nav-last').length) {


      const navLast = extraMenuList.find('.nav-direction__nav-last');

      $('.nav-direction__nav-last').on('click', function () {
        $(this).toggleClass('_is-active-last');
      });

      $('.nav-direction__nav-last').attr('data-text-nav-more', getTextMoreMenu);

      $(document).on('click', function (e) {
        if ($(e.target).closest('.nav-direction__nav ul li').length) {
          return;
        }

        $('.nav-direction__nav-last').removeClass('_is-active-last');

      });
    }

  });

}

if ($('.nav-direction').length) {
  fixedNavDirection();
  oneLineExtraMenu();
}