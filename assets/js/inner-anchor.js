$(document).ready(function () {
    $(".innner-anchor").on("click", function () {
        const headerHeight = $("header").outerHeight();
        const target = $($(this).attr("href"));
        const position = target.offset().top - headerHeight - 50;
        $(window).scrollTop(position);
        return false;
    });
});
