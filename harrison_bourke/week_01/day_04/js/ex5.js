let accounts = [
  {name: "Harrison Bourke", balance: 102459},
  {name: "Guy Incognito", balance: 1405},
  {name: "John Williams", balance: 32045}
];

console.log("Welcome to the Bourke Bank. To check the balance of the bank, type 'balanceCheck();'.");
console.log("To add an account to the bank, please type 'addAccount(name, balance)' with name and balance representing the name of the person opening the bank, and the starting balance. Just enter the name if you wish to leave the starting balance at 0.");
console.log("To deposit money, please write 'deposit(name, amount)' with the name representing your name as it appears in our systems, and the amount you wish to deposit");
console.log("If you wish to withdraw money, please type the same but replace the word deposit with withdraw.");
console.log("To transfer money to someone, please type 'transfer(yourName, payeeName, amount)' where yourName is your full name as it appears on the systems, payeeName is the person you wish to pays name, and amount is the amount you wish to transfer.");
console.log("Thank you.");

const balanceCheck = function()
{
  let sum = 0;

  for (let i = 0; i < accounts.length; i++)
  {
    sum += accounts[i].balance;
  }

  console.log(sum);
  return sum;
}

const addAccount = function(name, balance)
{
  if (name === undefined)
  {
    console.log("Error. You have not correctly added a name");
    return;
  }

  if (balance < 0)
  {
    console.log("Error, you must enter a positive number for balance");
    return;
  }

  if (balance === undefined)
  {
    balance = 0;
  }


  let newAccount =
  {
    name: name,
    balance: balance
  }

  accounts.push(newAccount);

  console.log(`Thank you ${newAccount.name} for choosing Bourke Bank!`);
}

const withdraw = function(name, amount)
{

  let ref = findReference(name);

  if (ref === undefined)
  {
    console.log ("Error, user not found. Please enter your fullname as it appears in the system.");
    return;
  }

  if (accounts[ref].balance - amount < 0)
  {
    console.log(`Error, insufficient funds. You have $${accounts[ref].balance} and are trying to withdraw $${amount}`);
    return;
  }

  accounts[ref].balance -= amount;
  console.log(`Successfully withdrawn $${amount}. Your current balance is now $${accounts[ref].balance}`);
  return accounts[ref].balance;
}



const deposit = function(name, amount)
{
  let ref = findReference(name);

  if (ref === undefined)
  {
    console.log ("Error, user not found. Please enter your fullname as it appears in the system.");
    return;
  }

  if (amount < 0 || amount === undefined)
  {
    console.log("Error, you are trying to deposit an invalid amount of money.");
    return;
  }

  accounts[ref].balance += amount;
  console.log(`Successfully deposited $${amount}! Thank you ${accounts[ref].name}. You're current balance is now $${accounts[ref].balance}`);


}


const findReference = function(name)
{
  for (let i = 0; i < accounts.length; i++)
  {
    if (accounts[i].name == name)
    {
      return i;
    }
  }
}

const transfer = function(payerName, payeeName, amount)
{
  payerRef = findReference(payerName);
  payeeRef = findReference(payeeName);

  if (payerRef === undefined)
  {
    console.log("Error, payer user not found. Please enter your fullname as it appears in the system.");
    return;
  }

  if (payeeRef === undefined)
  {
    console.log("Error, payee user not found. Please enter your fullname as it appears in the system.");
    return;
  }

  if (amount < 0)
  {
    console.log("Error, you have not entered a positive amount.");
    return;
  }

  if (accounts[payerRef].balance - amount < 0)
  {
    console.log("Error, you have insufficient funds to make this transfer.");
    return;
  }

  accounts[payerRef].balance -= amount;
  accounts[payeeRef].balance += amount;

  console.log(`Transfer successful. ${accounts[payerRef].name} your new balance is $${accounts[payerRef].balance}, and ${accounts[payeeRef].name} your new balance is $${accounts[payeeRef].balance}. Thank you for choosing Bourke Bank`);
}
