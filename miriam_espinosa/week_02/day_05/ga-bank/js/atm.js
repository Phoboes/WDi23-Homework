//logic code
bank = {
  checking:0,
  //equivalent to:
  //deposit: function () {
  deposit(account, amount) {
    this[account]+=parseFloat(amount);
  }
};

//UI/DOM code

const render = function (){
  $('#checking-balance').text('$'+ bank.checking);
  //all DOM updating code will be here
}

$(document).ready(function(){
  $('#checking-deposit').on('click', function(){
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);
    render(); //update the screen
  });
});

//cant upload anything that is not money
