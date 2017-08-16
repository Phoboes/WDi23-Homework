// business logic
const bank = {
  checking: 0,
  savings: 0,

  // ES6 variant
  // same as deposit: function() {}
  deposit(account, amount) {
    //console.log('deposit made:', account, amount);
    this[account] += parseFloat(amount);
  }

};

// UI manipulation

const render = function () {
  // all DOM updating code will go here
  $('#checking-balance').text( '$' + bank.checking );
};

$(document).ready( function () {
  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    //console.log('deposit clicked', amount);
    bank.deposit('checking', amount);

    render();
  });

});
