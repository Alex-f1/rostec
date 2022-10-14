'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function() {
  //=require ../_blocks/**/*.js

  $('.js-go-to-top').on('click', function() {
    $('html, body').stop().animate({ scrollTop: 0 }, 1000, 'swing');
  });

  $('.js-button-filter').on('click', function() {
    $(this).toggleClass('_is-active');
  });

  $('.js-footer-button-language').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.footer__language').toggleClass('_is-active');
    $('.js-footer-language-selection').toggleClass('_is-show');
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest('.footer__language').length) {
      return;
    }
    $('.footer__language').removeClass('_is-active');
    $('.js-footer-language-selection').removeClass('_is-show');
  });

  const sScrollContainer = document.querySelectorAll('.ss-container');
  for (var i = 0, len = sScrollContainer.length; i < len; i++) {
    SimpleScrollbar.initEl(sScrollContainer[i]);
  }
});
