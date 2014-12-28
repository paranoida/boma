$(function() {
  mapModule.init();
  scrollModule.init();
  $.stellar();

  CookieDisclaimer.init('boma', 'Ważna informacja: Używając tej strony zezwalasz na zapisywanie plików cookies na Twoim komputerze.');
  CookieDisclaimer.test();
});
