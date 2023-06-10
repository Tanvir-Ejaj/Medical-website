$(function () {
  // Nice select area
  $("select").niceSelect();

  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");

  $(".slider-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    asNavFor: ".slider-small",
  });
  $(".slider-small").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-big",
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
    infinite: true,
  });

  // Extra button part start

  $(".extra-btn").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  // Extra button part end

  // scroll part start

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 10) {
      $(".main-nav").addClass("nav-bg");
    } else {
      $(".main-nav").removeClass("nav-bg");
    }

    if (scrolling > 10) {
      $(".extra-btn").fadeIn(200);
    } else {
      $(".extra-btn").fadeOut(200);
    }
  });

  // scroll part end

  // var mixer = mixitup(".mixitup");
  // video part start

  // new VenoBox({
  //   selector: ".about-video",
  // });

  // video part end

  // image part start

  // lightbox.option({
  //   resizeDuration: 200,
  //   wrapAround: true,
  // });

  // image part end

  // WOw JS Area start

  new WOW().init();

  // WOw JS Area end
});

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
