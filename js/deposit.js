document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositBalance = document.getElementById('deposit-balance');
    const newDepositString = depositBalance.innerText;
    const newDepositBalance = parseFloat(newDepositString);
    /*********************/ 
    const depositField = document.getElementById('deposit-field');
    const previousDepositString = depositField.value;
    const previousDepositBalance = parseFloat(previousDepositString);
    // sum Total Balance
    const currentTotalDeposit = newDepositBalance + previousDepositBalance;
    depositBalance.innerText = currentTotalDeposit;
    // main balance add 
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const previousMainBalance = parseFloat(mainBalanceString);

    const currentMainBalance = previousMainBalance + previousDepositBalance;

    mainBalance.innerText = currentMainBalance;


    depositField.value = '';
})