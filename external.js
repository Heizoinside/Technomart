var buyItem = document.querySelectorAll(".in-cart");
var modalCart = document.querySelector(".modal-in-cart");
var cartClose = modalCart.querySelector(".modal-cart-close");
var cartContinue = modalCart.querySelector(".continue");
var submitIssue = modalCart.querySelector(".issue");

for (var i=0; i<buyItem.length; i++) {
  buyItem[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('modal-show');
  });
}

cartClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-show');
});

cartContinue.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-show');
});

submitIssue.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains('modal-show')) {
      modalCart.classList.remove('modal-show');
    }
  }
});
var modalContacts = document.querySelector(".modal-write-us");
var contactsLink = document.querySelector(".button-write");
var contactsClose = modalContacts.querySelector(".modal-close");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContacts.classList.add("modal-show");
});
contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalContacts.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalContacts.classList.contains("modal-show")) {
      modalContacts.classList.remove("modal-show");
    }
  }
});

var modalMap = document.querySelector(".modal-map");
var mapLink = document.querySelector(".modal-map-link");
var mapClose = modalMap.querySelector(".modal-map-close");
mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
});
