// const binarySearch = function ( needle, haystack ) {
//   // Start with an array sorted in descending order.
//   // In each step:
//
//   let index = parseInt(haystack.length / 2) ;
//   console.log(index);
//   if (haystack[index] === needle){
//     console.log(`this index of the needle is located at index: ${index} `);
//   } else if ( needle > haystack[index]){
//     index += Math.round(((haystack.length - haystack[index]) / 2));
//     console.log(index);
//     binarySearch(needle, haystack[index]);
//   } else {
//
//   }
  // console.log(index);
  // Pick the middle element of the array m and compare it to e.
  // If element values are equal, then return index of m.
  // If e is greater than m, then e must be in left subarray. If m is greater than e, then e must be in the right subarray.
  // Repeat those steps on new subarray.
}


const binarySearch = (needle, haystack) => {
  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    let mid = Math.round( start + (end - start)/2);

    if (haystack[mid] > needle){
      end = mid - 1;
    }else if (haystack[mid] < needle){
      start = mid + 1;
    }else {
      return mid;
    }
  }
  return false;
};

for (let i = 5; i < 100; i++ ){
  let foundIndex = binarySearch(i, number);
  if (foundIndex !== false){
    console.log(`found ${i} at ${foundIndex}`);
  }
};


binarySearch( 100, [1, 2, 3, 5, 7, 9, 23, 100] );
