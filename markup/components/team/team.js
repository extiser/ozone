$('.jsTeamList').slick({
  responsive: [
    {
      breakpoint: 2600,
      settings: "unslick"
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 600,
        fade: false,
        arrows: false
      }
    }
  ]
});

$(document).ready(function () {
  var screenWidth = $(window).width();
  if (!isMobile.any) {
  // if (isMobile.android.tablet && !isMobile.apple.device && !isMobile.android.phone && !isMobile.amazon.device && !isMobile.windows.device) {
    var jsTeamListWidth = $('.jsTeamList').width(),
      jsTeamListItemCount = $('.jsTeamListItem').length;

    $('.jsTeamListItem').width(jsTeamListWidth / jsTeamListItemCount);

    // mouseover
    $(".jsTeamListItem").bind("mouseover", function(){
      $('.jsTeamListItem').each(function () {
        $(this).width((jsTeamListWidth - 693) / (jsTeamListItemCount - 1));
      });
      $(this).width(693);
    });

    // Mouse out
    $(".jsTeamListItem").bind("mouseout", function(){
      $('.jsTeamListItem').width(jsTeamListWidth / jsTeamListItemCount);
    });
  } else {
    $('.jsTeamListItem').click(function () {
      $(this).toggleClass('_active');
    });
  }
});