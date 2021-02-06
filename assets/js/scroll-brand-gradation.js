$(document).ready(function () {
  const element = $(".navbar-brand");
  const defaultAlpha = 0.9;
  let alpha = defaultAlpha;
  let isDefault = true;
  let currentRequestId = undefined;
  function startAnimation() {
    if (currentRequestId) {
      window.cancelAnimationFrame(currentRequestId);
    }
    function step() {
      alpha += isDefault ? 0.03 : -0.03;
      alpha = Math.min(Math.max(alpha, 0), defaultAlpha);
      element.css("webkit-text-fill-color", "rgba(0,0,0," + alpha + ")");
      if (isDefault && alpha < defaultAlpha || !isDefault && alpha > 0) {
        currentRequestId = window.requestAnimationFrame(step);
      }
    }
    currentRequestId = window.requestAnimationFrame(step);
  }
  $(window).scroll(function () {
    const y = $(window).scrollTop();
    if (y > 0) {
      element.addClass("text-gradation");
      if (isDefault) {
        isDefault = false;
        startAnimation();
      }
    } else {
      element.removeClass("text-gradation");
      if (!isDefault) {
        isDefault = true;
        startAnimation();
      }
    }
  });
});