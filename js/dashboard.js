// This function takes all the id of html input as argument, find the value of each input field, convert them to float and return the value.
function getIdFromInput(getInputId) {
  const getInputIdString = document.getElementById(getInputId);
  const getInputIdValue = getInputIdString.value;
  if (getInputIdValue == "") {
    alert("Please enter your amount in number!!");
    return 0;
  } else {
    const convertInputToNumber = parseFloat(getInputIdValue);
    getInputIdString.value = "";
    return convertInputToNumber;
  }
}

// This function takes all the dashboard items id as argument, find the inner text, convert them to float and return them.
function getIdFormDashboard(getDashboardId) {
  const getDashboardInnerTextString = document.getElementById(getDashboardId);
  const getDashboardInnerText = getDashboardInnerTextString.innerText;
  const convertInnerToNumber = parseFloat(getDashboardInnerText);
  return convertInnerToNumber;
}

// This function has two parameter. First Parameter is the id of html element and the second one is the new value after calculation. After calculating, it changes the current inner text with updated new value.
function setValueToDashboard(getDashboardId, getNewValue) {
  const newDashboardValue = document.getElementById(getDashboardId);
  newDashboardValue.innerText = getNewValue;
}

// This is a click event for 'deposite' button where we call the functions and set the values according to the function.
document.getElementById("deposite-button").addEventListener("click", function () {
  const getDepositeValueFromUser = getIdFromInput('deposite');

  const getValueFromDeposite = getIdFormDashboard('deposite-total');
  const updateDepositeTotal = getDepositeValueFromUser + getValueFromDeposite;
  setValueToDashboard('deposite-total', updateDepositeTotal);

  const getValueFromTotal = getIdFormDashboard('balance-total');
  const updateBalanceTotal = getValueFromTotal + getDepositeValueFromUser;
  setValueToDashboard('balance-total', updateBalanceTotal);

});

// This is a click event for 'withdraw' button where we call the functions and set the values according to the function.
document.getElementById("withdraw-button").addEventListener("click", function () {
  const getWithdrawValueFromUser = getIdFromInput('withdraw');

  const getValueFromWithdraw = getIdFormDashboard("withdraw-total");
  const updateWithdrawTotal = getWithdrawValueFromUser + getValueFromWithdraw;

  const getValueFromBalanceTotal = getIdFormDashboard("balance-total");
  const afterWithdraw = getValueFromBalanceTotal - getWithdrawValueFromUser;
  if (afterWithdraw < 0) {
    alert("Not enough money");
  } else {
    setValueToDashboard('withdraw-total', updateWithdrawTotal);
    setValueToDashboard('balance-total', afterWithdraw);
  }

});