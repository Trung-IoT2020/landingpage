jQuery(document).ready(function () {
  var heightHeader = jQuery("header").height();
  if (jQuery(window).width() < 768) {
    // jQuery(window).scroll(function () {
    //   if (window.pageYOffset >= heightHeader + 10) {
    //     jQuery("header").addClass("fixed");
    //   } else {
    //     jQuery("header").removeClass("fixed");
    //   }
    // });
  }

  jQuery("#close-toast").click(function (e) {
    e.preventDefault();
    jQuery(".download-app-toast").hide();
  });
  jQuery("#open-menu").click(function (e) {
    e.preventDefault();
    jQuery(".menu-mobile").addClass("show");
  });
  jQuery("#close-menu").click(function (e) {
    e.preventDefault();
    jQuery(".menu-mobile").removeClass("show");
  });
  jQuery(".menu-mobile .bg").click(function () {
    jQuery(".menu-mobile").removeClass("show");
  });
  jQuery(".scroll-to").click(function () {
    jQuery(".menu-mobile").removeClass("show");
    target = jQuery(this).attr("data-target");
    jQuery([document.documentElement, document.body]).animate(
      {
        scrollTop:
          target !== "footer"
            ? jQuery("#" + target).offset().top - 100
            : jQuery("#" + target).offset().top,
      },
      100
    );
  });
});
