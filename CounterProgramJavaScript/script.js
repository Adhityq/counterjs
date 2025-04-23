//counter program
const kurangBtn = document.getElementById("kurangBtn");
const ulangBtn = document.getElementById("ulangBtn");
const tambahBtn = document.getElementById("tambahBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

tambahBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

ulangBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

kurangBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
