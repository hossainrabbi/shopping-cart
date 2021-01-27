const phoneButtonPlus = document.getElementById('phone-button-plus');
const phoneButtonMinus = document.getElementById('phone-button-minus');

// phone count plus
let phoneValue = document.getElementById('phone-value').value;
let phoneValueNumber = parseInt(phoneValue);
//phone price
const phonePrice = document.getElementById('phone-price').innerText;
const phonePriceNumber = parseInt(phonePrice);

// phoneButtonPlus event
phoneButtonPlus.addEventListener('click', function () {
  // phone count update
  document.getElementById('phone-value').value = ++phoneValueNumber;
  //phone price update
  updatePhonePrice('phone-price');
});

// phoneButtonMinus event
phoneButtonMinus.addEventListener('click', function () {
  // phone count update
  document.getElementById('phone-value').value = --phoneValueNumber;
  //phone price update
  updatePhonePrice('phone-price');
});

function updatePhonePrice(id) {
  document.getElementById(id).innerText = phonePriceNumber * phoneValueNumber;
}
