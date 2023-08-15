document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceString = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceString); 
   
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldBalance = parseFloat(withdrawFieldString);

    const currentWithdrawBalance = previousWithdrawBalance + withdrawFieldBalance;

    withdrawBalance.innerText = currentWithdrawBalance;

    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText;
    const previousMainBalance = parseFloat(mainBalanceString);

    const currentMainBalance = previousMainBalance - withdrawFieldBalance;

    mainBalance.innerText = currentMainBalance;


    withdrawField.value = '';

})