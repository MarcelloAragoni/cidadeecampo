!function () { document.getElementById("search-form").onsubmit = function (e) { e.preventDefault(); var n = document.getElementById("search-input"); n.value && (window.location = "/" + n.value) }, document.getElementById("search-form-responsive").onsubmit = function (e) { e.preventDefault(); var n = document.getElementById("search-input-responsive"); n.value && (window.location = "/" + n.value) } }();
var navSearchInput = document.getElementsByClassName("nav-search-input")[0], navSearchButton = document.getElementById("nav-search-button"); navSearchButton.addEventListener("click", function (e) { navSearchInput.style.visibility || (e.preventDefault(), navSearchInput.style.visibility = "visible", navSearchInput.style.opacity = "1") }); var listItemArray = document.getElementsByClassName("nav-fashion-list__item"); for (var e = 0; e < listItemArray.length; e++) { listItemArray[e].style.visibility = "visible"; listItemArray[e].style.opacity = "1"; };

// Menu actions
(function () {
  var menuButton = document.getElementById("hamburguer-menu");
  var switchButton = document.getElementById("mobile-categories-menu-switch");
  var navList = document.getElementById("nav-list");

  function toggle() {
    var body = document.body;
    var navVertialList = document.getElementById("nav-vertical-list");
    var responsiveMenu = document.getElementById("responsive-menu");

    var visibility = "visibility";
    var transition = "0.2s";
    var opacityHidden = "0";
    var opacityVisible = "1";
    var leftHidden = "-95vw";
    var leftVisible = "0";
    var visibilityHidden = "hidden";
    var visibilityVisible = "visible";
    var pointerEventsAuto = "auto";
    var pointerEventsNone = "none";
    var bodyBlockScroll = "body--block-scroll";

    var navVertialListVisibility = window.getComputedStyle(navVertialList, null).getPropertyValue(visibility);
    var responsiveMenuVisibility = window.getComputedStyle(responsiveMenu, null).getPropertyValue(visibility);


    navVertialList.style.transition = transition;
    responsiveMenu.style.transition = transition;

    if (navVertialListVisibility === visibilityHidden || responsiveMenuVisibility === visibilityHidden) {
      navVertialList.style.visibility = visibilityVisible;
      responsiveMenu.style.visibility = visibilityVisible;
      navVertialList.style.opacity = opacityVisible;
      responsiveMenu.style.opacity = opacityVisible;
      responsiveMenu.style.left = leftVisible;
      navVertialList.style.pointerEvents = pointerEventsAuto;
      body.classList.add(bodyBlockScroll);
    } else {
      navVertialList.style.visibility = visibilityHidden;
      responsiveMenu.style.visibility = visibilityHidden;
      navVertialList.style.opacity = opacityHidden;
      responsiveMenu.style.opacity = opacityHidden;
      responsiveMenu.style.left = leftHidden;
      navVertialList.style.pointerEvents = pointerEventsNone;
      body.classList.remove(bodyBlockScroll);
    }
  }

  function showHamburgerMenu() {
    var navListChildren = navList.children;
    var maxWidthNavList = 400;
    var totalWidth = 0;

    for (var i = 0; i < navListChildren.length; i++) {
      totalWidth = totalWidth + navListChildren[i].offsetWidth;
    }

    return totalWidth > maxWidthNavList;
  }

  if (switchButton.checked) {
    toggle()
  }

  menuButton.addEventListener("click", toggle);

  var isLogoLeft = document.getElementsByClassName('nav-logo-float-left');

  if (isLogoLeft.length) {
    var navVerticalList = document.getElementById("nav-vertical-list");
    var button = document.getElementById('nav-fashion__see-more');
    var saleButton = document.getElementById('nav-fashion__sale-link');

    button.addEventListener("click", toggle);

    button.classList.add("nav-fashion__see-more--activated");

    var navListChildren = navList.children;
    var navVerticalListChildren = navVerticalList.children;

    var navVerticalNewList = [];
    var countWidth = 0;
    var saleButtonWidth = saleButton ? saleButton.clientWidth : 0;
    var max = navList.clientWidth - (saleButtonWidth + button.clientWidth);

    var exceptions = ["nav-fashion__hamburger-button", "nav-fashion__see-more", "nav-fashion__sale-link"];

    for (var i = 0; i < navListChildren.length; i++) {
      if (exceptions.indexOf(navListChildren[i].id) === -1) {
        var condition;
        if (i === (navListChildren.length - exceptions.length) && !exceptions) {
          condition = (navListChildren[i].clientWidth <= max);
        } else {
          condition = (navListChildren[i].clientWidth + countWidth <= max);
        }
        if (condition) {
          countWidth += navListChildren[i].clientWidth;
        } else {
          navVerticalNewList.push(navListChildren[i].textContent);
          navListChildren[i].setAttribute('style', 'display: none !important')
        }
      }
    }

    if (navVerticalNewList.length) {
      for (var e = 0; e < navVerticalListChildren.length; e++) {
        if (exceptions.indexOf(navVerticalListChildren[e].id) === -1) {
          if (navVerticalNewList.indexOf(navVerticalListChildren[e].textContent) === -1) {
            navVerticalListChildren[e].setAttribute('style', 'display: none !important')
          }
        }
      }
    } else {
      button.setAttribute('style', 'display: none !important')
    }

    var seeMorePosition = button.offsetLeft;

    navVerticalList.style.left = String(seeMorePosition) + 'px';
  } else {
    if (showHamburgerMenu()) {
      document.getElementById("header-wrapper").classList.add("with-hamburguer-menu");
    }
  }

  //Mobile menu actions
  var categoriesOption = document.querySelectorAll('[data-js="mobile-categories-toggle"]');

  categoriesOption.forEach(function (item) {
    item.addEventListener("click", toggleSubItems);
  }, this);

  function toggleSubItems() {
    var displayHidden = "none";
    var displayVisible = "block";
    var subItemes = document.querySelectorAll('[data-toggle="' + this.id + '"]');
    subItemes.forEach(function (item) {
      item.style.display = (this.checked) ? displayVisible : displayHidden;
    }, this);
  };
})();
