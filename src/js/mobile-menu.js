const contentMenu = document.querySelector(".mobile-menu");
const openButtonMenu = document.querySelector(".button-aside--open");
const closeButtonMenu = document.querySelector(".button-aside--close");
const whiteBackground = document.querySelector(".background-white");

function closeMenu() {
  contentMenu.classList.remove("button-aside--open");
  whiteBackground.classList.remove("background-white--active");
}

openButtonMenu.addEventListener("click", function (evt) {
  contentMenu.classList.add("button-aside--open");
  whiteBackground.classList.add("background-white--active");
});

closeButtonMenu.addEventListener("click", function (evt) {
  closeMenu();
});

whiteBackground.addEventListener("click", function (evt) {
  if (contentMenu.classList.contains("button-aside--open")) {
    closeMenu();
  }
});