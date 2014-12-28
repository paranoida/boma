var scrollModule = (function ($) {
  function bindEvents() {
    $('.js-scroll-to').on('click', function(e) {
      e.preventDefault();

      var target = $(this).attr('href');
      var targetPosition = $(target).position().top;

      $('html, body').animate({
        scrollTop: targetPosition
      }, 500);
    });
  }

  var init = function () {
    bindEvents();
  };

  return {
    init: init
  };
}(jQuery));
