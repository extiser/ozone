(function () {
  $('.select-item').hover(function () {
    $(this).children('.select-item-list').toggleClass('_active');
    $('.mask').show();
  });
  $('.mask').hover(function () {
    $(this).hide();
    $('.select-item').children('.select-item-list').removeClass('_active');
  });
})();