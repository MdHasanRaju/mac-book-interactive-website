/* memory part */
document.getElementById('memory-8gb').addEventListener('click', function () {
    let memoryCostInput = document.getElementById("memory-cost");
    memoryCostInput.innerText = 0;
});
document.getElementById("memory-16gb").addEventListener('click', function () {
    let memoryCostInput = document.getElementById('memory-cost');
    memoryCostInput.innerText = 180; 
    // let memoryCostTotal = parseInt(memoryCost) + 180;
    // if ( memoryCostTotal <= 180) {
    //     memoryCostInput.innerText = memoryCostTotal;
    // }
});
/* storage cost part  */
document.getElementById("storage-256gb").addEventListener('click', function() {
    let storageCostInput = document.getElementById("storage-cost");
    storageCostInput.innerText = 0;
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    let storageCostInput = document.getElementById('storage-cost');
    storageCostInput.innerText = 100;
    // let storageCostTotal = parseInt(storageCost) + 100;
    // if (storageCostTotal <= 100) {
    //     storageCostInput.innerText = storageCostTotal;
    // }
    // console.log(storageCostTotal);
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  let storageCostInput = document.getElementById("storage-cost");
  storageCostInput.innerText = 180;
});

/* delivery part */
document.getElementById("delivery-free").addEventListener('click', function() {
    let deliveryCostInput = document.getElementById('delivery-cost');
    deliveryCostInput.innerText = 0;
})
document.getElementById("delivery-prime").addEventListener('click', function() {
    let deliveryCostInput = document.getElementById('delivery-cost');
    deliveryCostInput.innerText = 20;
})


