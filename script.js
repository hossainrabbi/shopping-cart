// phone Button
const phoneButtonPlus = document.getElementById('phone-button-plus');
const phoneButtonMinus = document.getElementById('phone-button-minus');
// phone count plus
let phoneValue = document.getElementById('phone-value').value;
let phoneValueNumber = parseInt(phoneValue);
//phone price
const phonePrice = document.getElementById('phone-price').innerText;
const phonePriceNumber = parseInt(phonePrice);

// Cover Button
const coverButtonPlus = document.getElementById('cover-button-plus');
const coverButtonMinus = document.getElementById('cover-button-minus');
// cover count plus
let coverValue = document.getElementById('cover-value').value;
let coverValueNumber = parseInt(coverValue);
//cover price
const coverPrice = document.getElementById('cover-price').innerText;
const coverPriceNumber = parseInt(coverPrice);

// phone Button Plus event
phoneButtonPlus.addEventListener('click', function () {
  // phone plus count update
  document.getElementById('phone-value').value = ++phoneValueNumber;
  //   updatePlusCount('phone-value', phoneValueNumber);

  //phone price update
  updatePrice('phone-price', phonePriceNumber, phoneValueNumber);
});

// phone Button Minus event
phoneButtonMinus.addEventListener('click', function () {
  // phone minus count update
  document.getElementById('phone-value').value = --phoneValueNumber;
  //   updateMinusCount('phone-value', phoneValueNumber);

  //phone price update
  updatePrice('phone-price', phonePriceNumber, phoneValueNumber);
});

// cover Button Plus event
coverButtonPlus.addEventListener('click', function () {
  // cover plus count update
  document.getElementById('cover-value').value = ++coverValueNumber;
  //   updatePlusCount('cover-value', coverValueNumber);

  //cover price update
  updatePrice('cover-price', coverPriceNumber, coverValueNumber);
});

// cover Button Minus event
coverButtonMinus.addEventListener('click', function () {
  // cover minus count update
  document.getElementById('cover-value').value = --coverValueNumber;
  //   updateMinusCount('cover-value', coverValueNumber);

  //cover price update
  updatePrice('cover-price', coverPriceNumber, coverValueNumber);
});

// update plus count function
function updatePlusCount(id, value) {
  document.getElementById(id).value = ++value;
}

// update minus count function
function updateMinusCount(id, value) {
  document.getElementById(id).value = --value;
}

//Price update function
function updatePrice(id, price, value) {
  document.getElementById(id).innerText = price * value;
}
