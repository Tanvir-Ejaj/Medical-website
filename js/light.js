$(".darkmode").click(function () {
  //1
  $("body")
    .toggleClass("dark") //2
    .css(
      //3
      $("body").hasClass("dark") //4
        ? { background: "#131313", color: "#ffffff" }
        : { background: "#ffffff", color: "#131313" } //5
    );
});
// It's not clear if the ternary counts as 2 lines or 1 when I'm trying to minimise line count, but I'm counting it as 2
