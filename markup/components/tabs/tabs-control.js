$('.jsTabsControlItem').click(function (e) {
  e.preventDefault();
  var tabTarget = $(this).index();

  $(this).addClass('_active').siblings().removeClass('_active');
  $('.jsTabsContentItem').eq(tabTarget).addClass('_active').siblings().removeClass('_active');
  $('.jsTabsContentText').eq(tabTarget).addClass('_active').siblings().removeClass('_active');
});


$(document).ready(function () {
  var winHash = window.location.hash.slice(1);
  if (winHash) {
    $('.jsTabsControlItem[data-control-tab="'+winHash+'"]').addClass('_active').siblings().removeClass('_active');
    $('.jsTabsContentItem[data-content-tab="'+winHash+'"]').addClass('_active').siblings().removeClass('_active');

    $('html, body').animate({
      scrollTop: $('.jsTabsControlItem[data-control-tab="'+winHash+'"]').offset().top - 91
    }, 1000);
  } else {
    $('.jsTabsControlItem[data-control-tab="tab1"], .jsTabsContentItem[data-content-tab="tab1"], .jsTabsContentText[data-content-tab="tab1"]').addClass('_active').siblings().removeClass('_active');
  }
});