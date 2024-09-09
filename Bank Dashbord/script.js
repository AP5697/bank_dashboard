document.addEventListener("DOMContentLoaded", function() {
    let balance = 1000;
    const balanceAmount = document.getElementById("balance-amount");
    const depositBtn = document.getElementById("deposit-btn");
    const withdrawBtn = document.getElementById("withdraw-btn");

    depositBtn.addEventListener("click", function() {
        const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            balance += depositAmount;
            updateBalance();
        }
    });

    withdrawBtn.addEventListener("click", function() {
        const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (withdrawAmount <= balance) {
                balance -= withdrawAmount;
                updateBalance();
            } else {
                alert("Insufficient funds!");
            }
        }
    });

    function updateBalance() {
        balanceAmount.textContent = balance.toFixed(2);
    }
});