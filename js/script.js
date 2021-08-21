let memoryCostInput = document.getElementById("memory-cost");
let storageCostInput = document.getElementById("storage-cost");
let deliveryCostInput = document.getElementById("delivery-cost");
let totalPriceInput = document.getElementById("total-price");

function getInput() {
  totalPriceInput.innerText =
    1299 +
    parseFloat(memoryCostInput.innerText) +
    parseFloat(storageCostInput.innerText) +
    parseFloat(deliveryCostInput.innerText);
}

function promoCode() {
  let promoInput = document.getElementById("promo-input").value;
  if (promoInput == "stevekaku") {
    let promoDiscount = totalPriceInput.innerText * (20 / 100);
    let promoPercentage = totalPriceInput.innerText - promoDiscount;
    document.getElementById("discounted-price").innerText =
      parseFloat(promoPercentage);
  }
  document.getElementById("promo-input").value = "";
}

/* memory button part  */
document.getElementById("memory-8gb").addEventListener("click", function () {
  memoryCostInput.innerText = 0;
  getInput();
});

document.getElementById("memory-16gb").addEventListener("click", function () {
  memoryCostInput.innerText = 180;
  getInput();
});

/* storage button part  */
document.getElementById("storage-256gb").addEventListener("click", function () {
  storageCostInput.innerText = 0;
  getInput();
});

document.getElementById("storage-512gb").addEventListener("click", function () {
  storageCostInput.innerText = 100;
  getInput();
});

document.getElementById("storage-1tb").addEventListener("click", function () {
  storageCostInput.innerText = 180;
  getInput();
});

/* delivery button part */
document.getElementById("delivery-free").addEventListener("click", function () {
  deliveryCostInput.innerText = 0;
  getInput();
});

document
  .getElementById("delivery-prime")
  .addEventListener("click", function () {
    deliveryCostInput.innerText = 20;
    getInput();
  });

/* Coupon Code */
document.getElementById("discount-btn").addEventListener("click", function () {
  promoCode();
});
