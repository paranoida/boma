window.CookieDisclaimer = (function (jQuery) {
  var cookieName, message;

  function init(site, message) {
    this.cookieName = site + '_cookies_accepted';
    this.message = message;

    jQuery(document).on('click', '#cookies-close', function(e) {
      create(CookieDisclaimer.cookieName, true, 1800);
      jQuery('#cookies').remove();
      jQuery('body').removeClass('cookie');
      e.preventDefault();
    });
  }

  function test() {
    if (!read(CookieDisclaimer.cookieName)) {
      var theDiv = '<div id="cookies" class="cookies-bar">' + this.message + '<a id="cookies-close" href="#" class="cookies-bar__close">&times;</a></div>';
      jQuery('body').addClass('cookie').prepend(theDiv);
    }
  }

  function create(name, value, days) {
    var expires;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i=0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0)== ' ') {
        c = c.substring(1,c.length);
      }

      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }

    return null;
  }

  return { // Public properties
    init: init,
    test: test
  };
})(jQuery);
