document
  .getElementById('case-increment')
  .addEventListener('click', function () {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById('cover-price').innerText = caseTotal;
  });

document
  .getElementById('case-decrement')
  .addEventListener('click', function () {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById('cover-price').innerText = caseTotal;
  });
