function fixedNavDirection() {
  const getPositionNavDirection = $('.nav-direction').offset().top;
  const getHeightNavDirection = $('.nav-direction').height();

  $(window).scroll(function () {
    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;

    if (newScroll >= getPositionNavDirection + getHeightNavDirection) {
      $('.nav-direction').css('transform', 'translateY(' + -100 + 'px)')
    } else {
      $('.nav-direction').css('transform', 'translateY(' + 0 + 'px)')
    }

    if (newScroll < oldScroll) {
      $('.nav-direction').css('transform', 'translateY(' + 0 + 'px)')
      $('.nav-direction').addClass('_is-fixed');
      $('.inner-header').css('padding-top', getHeightNavDirection)
    } else {
      $('.nav-direction').removeClass('_is-fixed');
      $('.inner-header').css('padding-top', 0)
    }

    this.oldScroll = newScroll;

    if (newScroll >= oldScroll) {
      $('.nav-direction').removeClass('_is-fixed');
      $('.inner-header').css('padding-top', 0)
    }

    if (newScroll <= getPositionNavDirection) {
      $('.nav-direction').removeClass('_is-fixed');
      $('.inner-header').css('padding-top', 0)
    }
  });
}

if ($('.nav-direction').length) {
  fixedNavDirection();
}