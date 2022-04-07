import React from 'react'

function IncomeExpense() {
  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">
          +$0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">
          -$0.00
        </p>
      </div>
    </div>
  );
}


export default IncomeExpense;