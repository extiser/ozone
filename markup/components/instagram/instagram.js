$(document).ready(function () {
  $(".jsInstagram").smoothDivScroll({
    manualContinuousScrolling: true,
    autoScrollingMode: "onStart",
    touchScrolling: true,
    manualContinuousScrolling: true,
    autoScrollingInterval: 30
  });

  // Mouse over
  $(".jsInstagram").bind("mouseover", function(){
      $(".jsInstagram").smoothDivScroll("stopAutoScrolling");
  });

  // Mouse out
  $(".jsInstagram").bind("mouseout", function(){
      $(".jsInstagram").smoothDivScroll("startAutoScrolling");
  });
});