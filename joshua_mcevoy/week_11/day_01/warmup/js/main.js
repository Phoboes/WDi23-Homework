const collatz = function (num){
  let count = 0;
  while(num !== 1){
    count += 1;
    if (num % 2 == 0){
      num = num / 2;
    }else {
      num = (num * 3) + 1;
    }
  }
  console.log(count);
}
collatz(4);
collatz(5);
collatz(527346982);
