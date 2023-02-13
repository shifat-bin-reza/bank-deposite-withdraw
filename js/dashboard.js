// Deposite button function
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const newDepositeAmount = document.getElementById("deposite").value;

    // adding the value to deposite
    const depositeTotalElement = document.getElementById("deposite-total");
    const previousDepositeTotal = depositeTotalElement.innerText;

    // calculating value
    const currentDepositeTotal =
      parseFloat(previousDepositeTotal) + parseFloat(newDepositeAmount);

    // calculating balace section
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotalElement.innerText;

    const currentBalanceTotal =
      parseFloat(previousBalanceTotal) + parseFloat(newDepositeAmount);
    if (newDepositeAmount == "") {
      document.getElementById("warning-deposite").style.display = "block";
    } else {
      document.getElementById("warning-deposite").style.display = "none";
      depositeTotalElement.innerText = currentDepositeTotal;
      balanceTotalElement.innerText = currentBalanceTotal;
    }

    document.getElementById("deposite").value = "";
  });

// Withdraw button function
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //withdraw
    const newWithdrawAmount = document.getElementById("withdraw").value;

    // adding the value to withdraw
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = withdrawTotalElement.innerText;

    // calculating value
    const currentWithdrawTotal =
      parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);

    const balanceTotal = document.getElementById("balance-total");
    previousBalanceTotal = balanceTotal.innerText;

    const afterWithdraw =
      parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);

    if (afterWithdraw < 0) {
      alert("Not enough money");
    } else if (newWithdrawAmount == "") {
      document.getElementById("warning-withdraw").style.display = "block";
    } else {
      document.getElementById("warning-withdraw").style.display = "none";
      withdrawTotalElement.innerText = currentWithdrawTotal;
      balanceTotal.innerText = afterWithdraw;
    }

    document.getElementById("withdraw").value = "";
  });
