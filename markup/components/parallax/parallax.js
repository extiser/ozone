$(document).ready(function () {
  $objWindow = $(window);
  $('jsParallax[data-type="background"]').each(function(){
    var $bgObj = $(this);
    $(window).scroll(function() {
      var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
      var coords = '100% '+ yPos + 'px';
      $bgObj.css({ backgroundPosition: coords });
    });
  });
});