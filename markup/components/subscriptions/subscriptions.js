$('.jsSubscriptions').slick({
  infinite: false,
  slidesToShow: 4,
  arrows: false,
  centerMode: false,
  speed: 600,
  dots: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: "unslick"
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '220px',
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '190px',
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '140px',
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '90px',
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
      }
    }
  ]
});
