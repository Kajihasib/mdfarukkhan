(function ($) {
  "use strict";

  var btn = $(".scrollTopBtn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  let header_height = $(".header-area").innerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header_height - 30) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });
  $(document).on("click", ".menu-trigger", function () {
    $(".responsive-menu").toggleClass("active");
  });
})(jQuery);
