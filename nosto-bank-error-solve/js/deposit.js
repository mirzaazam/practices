// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // const balanceTotal = getTextElementValueById("balance-total");

  // calculate new deposit total
  const balanceTotalCalculate = previousDepositTotal + balanceTotal;
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositAmount);
  // setTextElementValueById("balance-total", balanceTotalCalculate);

  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
