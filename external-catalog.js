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
