const refs = {
  header: document.querySelector("header[data-header]"),
  elems: document.querySelectorAll('nav ul a[href^="#"]'),
};

$(document).ready(function () {
  const headerHeight = $(refs.header).innerHeight();

  $(refs.elems).on("click", function (e) {
    e.preventDefault();
    const target = $(this.hash);
    const scroll = target.offset().top - headerHeight;
    $("html, body").animate(
      {
        scrollTop: scroll,
      },
      "smooth"
    );
  });
});

$(window).on("scroll", function () {
  console.log($(refs.header))
  $(refs.header).toggleClass(
    "header-bg-color",
    $(this).scrollTop() > $(".hero").height()
  );
});
