const validateCreditCard = function(n)
{
  let ccNumber = "";
  let digitsDifferent = false;
  let sum = 0;

  let returnMessage =
  {
    valid: true,
    number: n
  };



  for (let i = 0; i < n.length; i++)
  {
    if (n[i] != '-')
    {
      if (isNaN(parseInt(n[i])))
      {
        returnMessage.valid = false;
        returnMessage.error = "invalid_characters";
      }
      ccNumber += n[i].toString();
    }
  }

  let diffNumbers = false;

  for (let i = 0; i < ccNumber.length; i ++)
  {
    // In order to check if the numbers are all different,
    // we can compare the first digit to all other digits,
    // and if there is no differences we can conclude the numbers are the same
    if (ccNumber[0] !== ccNumber[i])
    {
      diffNumbers = true;
    }

    sum += parseInt(ccNumber[i]);
  }

  if (!diffNumbers)
  {
    returnMessage.valid = false;
    returnMessage.error = "digits_same";
  }

  if (sum <= 16)
  {
    returnMessage.valid = false;
    returnMessage.error = "sum_of_digits_below_16";
  }

  if (ccNumber.length != 16)
  {
    returnMessage.valid = false;
    ccNumber.length < 16 ? returnMessage.error = "not_enough_digits" : returnMessage.error = "too_many_digits";
  }

  if (parseInt(ccNumber[ccNumber.length - 1]) % 2 !== 0)
  {
    returnMessage.valid = false;
    returnMessage.error = "last_digit_odd";
  }



  return returnMessage;

}

console.log(validateCreditCard('9999-9999-8888-0000'));
