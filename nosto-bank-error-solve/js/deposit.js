// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  setTextElementValueById("deposit-total", newDepositAmount);
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById('balance-total')
  const newBalanceTotal = previousBalanceTotal + previousDepositTotal;
  setTextElementValueById("balance-total", newBalanceTotal);
});
