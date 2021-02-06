$(document).ready(function () {
  window.availableTarget = {};
  $(window).on('activate.bs.scrollspy', function (e, obj) {
    if (!obj.relatedTarget) return;

    const className = "border-animation-shadow-lg";
    const suffix = "-container";
    const isMdOrAbove = $(window).outerWidth() > 980;
    window.availableTarget[obj.relatedTarget] = true;
    for (const target in window.availableTarget) {
      $(target + suffix).removeClass(className);
    }
    if (isMdOrAbove && obj.relatedTarget.match("#topic-")) {
      for (let i = 0; i < 3; i++) {
        const target = "#topic-" + i;
        $(target + suffix).addClass(className);
        window.availableTarget[target] = true;
      }
    } else {
      $(obj.relatedTarget + suffix).addClass(className);
    }
  });
});