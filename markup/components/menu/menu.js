$('.jsMenuTrigger').click(function () {
  $(this).toggleClass('_active');
  $('.jsMenuList').slideToggle(300);
});