$(document).ready(function () {
  $(window).scroll(function () {
    const y = $(window).scrollTop();
    if (y > 0) {
      $(".shadow-sm-on-scroll").addClass("shadow-sm-on-scroll-has");
    } else {
      $(".shadow-sm-on-scroll").removeClass("shadow-sm-on-scroll-has");
    }
  });
});