// method that returns total sum
// add account method that enrolls new account to existing array
// bank is an object (for some reason)

// account structure
//  { id: 1234,
//    name: "Mr X",
//    amount: 100.23
//  }

let bank = {
  accounts: [],
  openNewAccount: function( name, amount ) {
    let account = {
      id: Math.floor(1000 + Math.random() * 9000),
      name: name,
      amount: amount
    }
    this.accounts.push(account);
  },
  showAccountAmount: function(account) {
    return parseFloat(this.accounts[account].amount.toFixed(2));
  },
  accountDeposit: function (account, amount) {
    this.accounts[account].amount += amount;
    console.log(`${amount} deposited successfully`);
  },
  accountWithdrawal: function (account, amount) {
    if (this.accounts[account].amount - amount <= 0) {
      console.log("You cannot afford this transaction");
    } else {
      this.accounts[account].amount -= amount;
      console.log(`${amount} withdraw`);
    }
  },
  transferCurrency: function( account1, account2, amount ) {
    if (this.accounts[account1].amount - amount <= 0) {
      console.log("You cannot afford this transaction");
    } else {
      this.accounts[account1].amount -= amount;
      this.accounts[account2].amount += amount;
      console.log(`$${amount} transferred successfully`);
    }
  }, showTotalCurrency: function() {
    let accounts = this.accounts;
    let amount = 0;

    for (let account in accounts) {
      amount += accounts[account].amount;
    }
    // numbers suck in javascript
    return parseFloat(amount.toFixed(2));
  }, listAccounts: function() {
    return accounts; 
  }
}


// setup helpers
const createAccount = function(name, amount) {
  let account = {
    id: Math.floor(1000 + Math.random() * 9000),
    name: name,
    amount: amount
  }
  return account;
}

// test
// generate accounts
bank.accounts.push(createAccount("Mr Mister", 156.34));
bank.accounts.push(createAccount("John Mc'Johnjon", 546309.22));

console.log(bank);
console.log('$', bank.showTotalCurrency());

// show account amounts
console.log('$', bank.showAccountAmount(0));
console.log('$', bank.showAccountAmount(1));

// transfer currency
bank.transferCurrency(0, 1, 20);

// updated account amounts
console.log('$', bank.showAccountAmount(0));
console.log('$', bank.showAccountAmount(1));

// transfer too much
bank.transferCurrency(0, 1, 200);

// deposit amount
bank.accountDeposit(0, 200);

// show change
console.log('$', bank.showAccountAmount(0));

bank.accountWithdrawal(0, 400);
bank.accountWithdrawal(0, 12.50);

console.log('$', bank.showAccountAmount(0));
