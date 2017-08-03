// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript.
//The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts.

let bank = [];
let sum = 0;

//The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount
//method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create
//additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//

const addAccount = function(currentBalance, name){
  let account = {
    currentBalance : parseFloat(currentBalance),
    name: name
  }
  bank.push(account);
};

const totalSum = function(bank){
  for (let i = 0; i < bank.length; i++){
    sum += bank[i]['currentBalance'];
  }
return sum;
};



const withdraw = function(accountname, amount){
  for (let i = 0; i < bank.length; i++){
    if (accountname === bank[i].name){
      let rightAccount = bank[i];
    rightAccount['currentBalance'] -= amount;
  }
  }
}

const deposit = function(accountname, amount){
  for (let i = 0; i < bank.length; i++){
    if (accountname === bank[i].name){
    return bank[i]['currentBalance'] += amount;
  }
  }
}

addAccount('1345.25', 'Henry');
addAccount('55.55', 'Adam');
console.log(bank);
console.log(totalSum(bank));

withdraw('Adam', 5);
console.log(bank);
console.log(totalSum(bank));
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to
//deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values --
//you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that
//shows that the methods do indeed work as expected: add some accounts, show the total balance, make some
//deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
