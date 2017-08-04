//logic code

bank = {
  checking:0,
  saving:0,
  //equivalent to:
  //deposit: function () {
  deposit(account, amount) {
    this[account]+=parseFloat(amount);
  },

  withdraw(account, amount) {
    this[account]-=parseFloat(amount);
  },

};


//UI/DOM code

const render = function (){
  $('#checking-balance').text('$'+ bank.checking);
  $('#savings-balance').text('$'+ bank.saving);
}


//all DOM updating code will be here

$(document).ready(function(){
  $('#checking-deposit').on('click', function(){
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);

    render();
  });

  $('#checking-withdraw').on('click', function(){
    const amount = $('#checking-amount').val();
    bank.withdraw('checking', amount);

    render();
  });

  $("#savings-deposit").on("click",function(){
    const amount = $('#savings-amount').val();
    bank.deposit('saving', amount);

    render(); //update the screen
  });

  $('#savings-withdraw').on('click', function(){
    const amount = $('#savings-amount').val();
    bank.withdraw('saving', amount);

    render();
  });
});


//cant upload anything that is not money
