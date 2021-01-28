function handleProductChange(product, isIncrement) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrement === true) {
    productNewCount = productCount + 1;
  }
  if (isIncrement === false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product === 'phone') {
    productTotal = productNewCount * 1219;
  }
  if (product === 'case') {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + '-price').innerText = productTotal;
  // call total calculate function
  calculateTotal();
}

function calculateTotal() {
  const phoneCount = getCount('phone');
  const caseCount = getCount('case');
  const subtotal = phoneCount * 1219 + caseCount * 59;
  document.getElementById('subtotal').innerText = subtotal;
  // calculate product tax
  const tax = Math.round(subtotal * 0.1);
  document.getElementById('tax').innerText = tax;
  // calculate product total amount
  document.getElementById('total').innerText = subtotal + tax;
}

// convert product value text to number
function getCount(product) {
  const productInput = document.getElementById(product + '-count');
  return parseInt(productInput.value);
}
