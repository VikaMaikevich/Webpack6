// call
const contentMenu = document.querySelector(".mobile-menu");
const contentCall = document.querySelector('.modal-call');
const openButtonCall = document.querySelector(".button_call--open");
const closeButtonCall = document.querySelector(".button_call--close");
const whiteBackgroundCall = document.querySelector(".background-white");

openButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.add("button_call--open");
  whiteBackgroundCall.classList.add("background-white--active");
});

closeButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.remove("button_call--open");
  whiteBackgroundCall.classList.remove("background-white--active");
});

const openButtonCallMenu = document.querySelector(".mobile-menu__button--open");
openButtonCallMenu.addEventListener("click", function (evt) {
  contentCall.classList.add("button_call--open");
  whiteBackgroundCall.classList.add("background-white--active");
  contentMenu.classList.remove("button-menu_call--open");
});

closeButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.remove("button_call--open");
  whiteBackgroundCall.classList.remove("background-white--active");
});

// chat
const contentChat = document.querySelector(".modal-chat");
const openButtonChat = document.querySelector(".modal-chat__button--open");
const closeButtonChat = document.querySelector(".modal-chat__button--close");
const whiteBackgroundChat = document.querySelector(".background-white");

openButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.add("modal-chat--open");
  whiteBackgroundChat.classList.add("background-white--active");
});

closeButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.remove("modal-chat--open");
  whiteBackgroundChat.classList.remove("background-white--active");
});


const openButtonChatMenu = document.querySelector(".mobile-menu__button-chat--open");
openButtonChatMenu.addEventListener("click", function (evt) {
  contentChat.classList.add("modal-chat--open");
  whiteBackgroundChat.classList.add("background-white--active");
  contentMenu.classList.remove("mobile-menu__button-chat--open");
});

closeButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.remove("modal-feedback--open");
  whiteBackgroundChat.classList.remove("background-white--active");
});