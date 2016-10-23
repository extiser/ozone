$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 0) { 
    $('.header').addClass('fixed');
    $('.logo').slideUp();
    // $('.logo-scrolled').slideDown();
  } else {
    $('.header').removeClass('fixed');
    $('.logo').slideDown();
    // $('.logo-scrolled').slideUp();
  }
});