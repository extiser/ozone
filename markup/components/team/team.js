$('.jsTeamList').slick({
  responsive: [
    {
      breakpoint: 2560,
      settings: "unslick"
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
  if (!isMobile.any) {
    var jsTeamListWidth = $('.jsTeamList').width(),
      jsTeamListItemCount = $('.jsTeamListItem').length;

    $('.jsTeamListItem').width(jsTeamListWidth / jsTeamListItemCount);

    // mouseover
    $(".jsTeamListItem").bind("mouseover", function(){
      $('.jsTeamListItem').each(function () {
        $(this).width((jsTeamListWidth - 693) / (jsTeamListItemCount - 1));
      });
      $(this).width(693);
      $(this).children('.jsTeamListItemImg').width('50%').children('img').width('100%').toggleClass('_active');
    });

    // Mouse out
    $(".jsTeamListItem").bind("mouseout", function(){
      $('.jsTeamListItem').width(jsTeamListWidth / jsTeamListItemCount).children('.jsTeamListItemImg').attr('style', '').children('img').attr('style', '');
    });
  } else {
    $('.jsTeamListItem').click(function () {
      $(this).toggleClass('_active');
    });
  }
});