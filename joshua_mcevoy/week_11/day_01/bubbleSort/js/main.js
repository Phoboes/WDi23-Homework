const numbers = [42, 1, 224, 53];

const bubbleSort = ( array ) => {
  let end = array.length - 1;

  for (let i = 0; i < end; i++) {
    if(array[i] > array[i + 1]){
      let largerValue = array[i];
      array[i] = array[i+1];
      array[i+1] = largerValue;
    }
  }
  end --;
}

bubbleSort(numbers);
