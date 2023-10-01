const mobileNav = () => {
  const headerBtn = $(".header__bars");
  const mobileNav = $(".mobile-nav");
  const mobileLinks = $(".mobile-nav__link");
  headerBtn.on("click", () => {
    $("body").css("overflow", "hidden");
    mobileNav.toggle();
    if ($(".mobile-nav").is(":visible")) {
      mobileNav.css("display", "flex");
    } else {
      $(".mobile-nav").css("display", "none");
    }
  });
  mobileLinks.on("click", () => {
    mobileNav.css("display", "none");
    $("body").css("overflow", "visible");
  });
};

export default mobileNav;
