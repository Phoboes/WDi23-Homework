$(document).ready(function() {
  // Set our initial account balances
  let accountBalances = {
    checking: 10,
    savings: 5,
  };

  // Define a function that will update the DOM with our balances
  const renderDOM = function() {
    let accountNames = Object.keys(accountBalances);
    for (let i = 0; i < accountNames.length; i++) {
      var currentBalance = accountBalances[accountNames[i]];
      var oneAccount = $('#' + accountNames[i] + '-balance');
      oneAccount.text('$' + currentBalance);

      // addClass('lowBalance') did not work!
      if (currentBalance < 1) {
        oneAccount.css({
          'background-color': 'red'
        });
      } else {
        oneAccount.css({
          'background-color': '#E3E3E3'
        });
      }
    }
  }

  // Define a function to actually process the transaction, correctly updating the account balance
  const transactionProcess = function(account, amount, type) {
    $('#message').removeClass('displayed');
    if (type == 'deposit') {
      accountBalances[account] += amount;

      // Add element reward when deposit button's hit. can't avoid duplicates!
      $('#message').addClass('displayed');
    }
  if (type == 'withdraw') {
    if (amount <= (accountBalances.savings + accountBalances.checking))
      accountBalances[account] -= amount;
    else {
      accountBalances[account];
    }
  }
  renderDOM();
};

// Bind our functions to each button
$('#checking-deposit').on('click', function() {
  transactionProcess('checking', +$('#checking-amount').val(), 'deposit');
}); $('#checking-withdraw').on('click', function() {
  transactionProcess('checking', +$('#checking-amount').val(), 'withdraw');
});

$('#savings-deposit').on('click', function() {
  transactionProcess('savings', +$('#savings-amount').val(), 'deposit');
});

$('#savings-withdraw').on('click', function() {
  transactionProcess('savings', +$('#savings-amount').val(), 'withdraw');
});

// Display the initial account balances
renderDOM();
});
