console.log('test');

// setup
let cat = document.getElementsByClassName('cat')[0];
let catnip = document.getElementsByClassName('catnip')[0];

cat.position = 'absolute';
cat.style.left = '0px';

let count = 0;
let counter = 0;
let rev = 0;

// const catMove = function() {
//
//   if (rev === 1) {
//     forwardCat();
//   } else if (rev === 0) {
//     reverseCat();
//   }
//   // if (rev === 0) {
//   //   forwardCat();
//   // } else if (rev === 1) {
//   //   reverseCat();
//   // } else {
//   //   return;
//   // }
// }

const forwardCat = function() {
  cat.className = "cat inverted";
  console.log(count);
  console.log('forwardCat');

  const anim = function() {
    if (count >= window.innerWidth - 290) {
      clearInterval(timer);
      reverseCat();
    } else {
      count += 1;
      cat.style.left = `${count}px`;
    }
  }

  let timer = setInterval(anim, 10);
}

const forwardHalf = function() {
  cat.className = "cat";

  const anim = function() {

    if (count >= window.innerWidth / 2 - 190) {
      clearInterval(timer);
      // catParty();
      catGrow();
    } else {
      count += 1;
      cat.style.left = `${count}px`;
    }
  }
  let timer = setInterval(anim, 10);
  // if (count >= window.innerWidth / 2 - 190) {
  //   window.clearInterval(timer);
  // } else {
  //   count += 1;
  //   cat.style.left = `${count}px`;
  // }
  // if (pos) {
  //   console.log('forwardCat');
  //   if (count >= window.innerWidth / 2) {
  //     window.clearInterval(timer);
  //   }
  // } else {
  //   if (count >= window.innerWidth - 290 ) {
  //     rev = 1;
  //   }
  // }
}

const reverseCat = function() {
  cat.className = "inverted invertCat";
  console.log('reverse cat');

  const anim = function() {
    if (count <= 0) {
      clearInterval(timer);
      forwardCat();
    } else {
      count -= 1;
      cat.style.left = `${count}px`;
    }
  }

  const timer = setInterval(anim, 10);
}


const catGrow = function() {
  let count = cat.width;
  cat.className = "cat inverted";
  catnip.className = "secret";

  const anim = function() {
    if (cat.width === 496) {
      clearInterval(timer);
      console.log('on to shrink');
      counter += 1
      catShrink();
    } else {
      cat.style.width = `${count}px`;
      count += 4;
    }
  }

  let timer = setInterval(anim, 1);
  // cat.style.width = '496px';
  // cat.style.height = '496px';
  // cat.className = "cat inverted";
}

const catShrink = function() {
  let count = cat.width;
  cat.className = "cat normal";

  const anim = function() {
    if (cat.width === 296) {
      clearInterval(timer);
      if (counter === 4) {
        console.log('start stars');
        startStars();
      } else {
        console.log('on to grow');
        catGrow()
      }
    } else {
      cat.style.width = `${count}px`;
      count -= 4;
    }

  }

  let timer = setInterval(anim, 1);
  // cat.style.width = "296px";
  // cat.style.height = "296px";
  // cat.className = "cat normal";
}

// const catParty = function() {
//   console.log("It's Party Time");
//   catGrow();
//   catShrink();
// }

const nyanFlyBy = function() {

}

const startStars = function() {
  let wrapper = document.getElementsByClassName('wrapper')[0];
  let catText = document.getElementsByClassName('catText')[0];

  wrapper.className = "wrapper";
  catText.className = "catText secret";

  let stars = document.getElementById('space');
  stars.className = "";
  cat.className = "cat inverted";
  forwardCat();
}

const nyanCats = function() {
  // setup nyan off screen
  // generate random position
  // move them across screen
}

console.log(window.innerWidth);

// const timer = window.setInterval(catMove, 10);

// when cat reaches middle run grow shrink
// add inverted class and continue journey
// remove secret from space class
// add in nyan cats
// add in nyan midi


forwardHalf();
