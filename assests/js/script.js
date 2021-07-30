$(document).ready(function () {
  const menuBtn = $(".menu-btn");
  const header = $("#header");
  const headerHeight = header.height();
  const menuItems = $('#nav li a[href*="#"]');

  // show/hide menu
  menuBtn.click(function (e) {
    e.preventDefault();
    toggleMenu();
  });

  //close menu when click
  $.each(menuItems, function (index, item) {
    $(item).click(function (e) {
      var isParentMenu = item.nextElementSibling;
      if (isParentMenu) {
        e.preventDefault();
      } else if (!isMenuClose()) {
        toggleMenu();
      }
    });
  });

  function toggleMenu() {
    if (isMenuClose()) header.css("height", "auto");
    else header.css("height", headerHeight);
  }

  function isMenuClose() {
    return headerHeight === header.height();
  }
});
