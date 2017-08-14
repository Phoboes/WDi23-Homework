// let DrEvil = function (amount) {
//     if (amount >= 1000000) {
//       console.log(amount + ' dollars (pinky)');
//   }
//     else {
//       console.log(amount + ' dollars');
//   }
// }
//
// DrEvil (10);
// DrEvil (10000000);
// DrEvil (1000);
// DrEvil (100000);
// DrEvil (1000000);

/////////////////////////////////

// let mixUp = function (str1, str2) {
//   let arr1 = str1.split("");
//   let arr2 = str2.split("");
//
//   let end1 = (str2.split("").slice(0, 2).join("")) + (str1.split("").slice(2, arr1.length).join(""));
//   let end2 = (str1.split("").slice(0, 2).join("")) + (str2.split("").slice(2, arr2.length).join(""));
//   console.log(end1);
//   console.log(end2);
// }
//
// mixUp('nothing', 'thisone');

//////////////////////////////////

// let fixStart = function (str) {
//   let array = str.split("");
//   let firstLetter = array.slice(0, 1);
//   let joint = [firstLetter];
//   for (let i = 1; i < array.length; i++){
//       if (array[i] == firstLetter){
//         joint.push('*');
//       }
//       else {
//         joint.push(array[i]);
//       }
//   }
//   console.log("joint =" + joint);
//   return joint;
// }
//
// fixStart('puppy');

///////////////////////////////////

// let verbing = function (str) {
//   let strEnding = str.slice(-3, str.length);
//   if (str.length >= 3 && strEnding !== 'ing'){
//     str += 'ing';
//   }
//   else if (str.length >= 3){
//     str += 'ly';
//   }
//   console.log("str = " + str);
// }
//
// verbing('something');
// verbing('did');
// verbing('oh');

///////////////////////////////////

let notBad = function (str) {
  let array = str.split(" ");
  console.log("array before for loop = "+ array);
  //let not1 = 0;
  //let bad1 = 0;
  for (let i = 0; i < array.length; i++){
    if (str.includes("not") && str.includes("bad")){
      //does not come before bad
      var one = array.indexOf("not");
      var two = array.indexOf("bad");
      console.log(one);
      if (one === -1 || two === -1){
      console.log("array in for = "+ array);
      //if so, delete not and change bad to good
    }
        }
  }
}

notBad('This dinner is not that bad');
