const validateCreditCard = function(digits) {
  digits.trim('-');
  if (digits[digits.length -1] % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[i]) {
      return false;
    }
    if ()
  }
}
