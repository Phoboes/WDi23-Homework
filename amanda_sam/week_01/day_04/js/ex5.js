/*
In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank:
  There is only one bank. This bank has an array of accounts.
  The bank needs a method that will return the total sum of money in the accounts.
  It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
  There is no need to create additional functions of the bank to delete accounts, etc.
  The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts:
  Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
  There is no need to write a user interface. Make sure functions return values
  -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/


// empty array to store accounts
// bank = [];


const bank = [
    {
      name: "A",
      balance: 500
    },
    {
      name: "B",
      balance: 300
    },
    {
      name: "C",
      balance: 700
    },
    {
      name: "D",
      balance: 1200
    }
]

// The bank needs a method - return the total sum of money in the accounts

accelerate: function () {
  for ( let i = 0; i < bank.length; i++) {
    balance += bank[i].balance;
  }
  console.log( "Total balance is $" + balance );
  return bank[i].balance;
  }

bank.accelerate();


// // to sum -- iterate the array
// for( var i = 0 ){
//   // loop the keys within each object -- add it to a sum
//   for( key in bank ){
//     sum += bank[i][key]
//   }
// }
