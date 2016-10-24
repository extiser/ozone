$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 70) { 
    $('.header').addClass('fixed');
    $('.logo').slideUp();
    // $('.logo-scrolled').slideDown();
  } else {
    $('.header').removeClass('fixed');
    $('.logo').slideDown();
    // $('.logo-scrolled').slideUp();
  }
});