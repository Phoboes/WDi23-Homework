// create board on init
// controller ( movement + bounds )
// robot

Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

const createBoard = function(size) {
  // create 8x8 (size x size) board
  board = Array.matrix(8, 8, ""); 

  // fix id
  console.log(board);
  for (let i in board) {
    console.log('i:', i);
    for (let j in board) {
      console.log('j:', j);
      $('.board').append($(`<div class="square" id=${[i][j]}>`));
    }
    //$('.board').append($('<div class="square">'));
  }
}

const movementController = function(key) {
  
}

const initRobot = function() {
    $('.square').first().append($("<div class='robot'>"));
    console.log("Robot Created");
};

$(document).ready( function() {
  createBoard();
  initRobot();
});

$(document).keydown(function(e) {
    const robot = $('.robot');

    switch(e.which) {
        case 37: // left
        console.log('move left');
        if (robot.position().left !== 10) {
          console.log($('.robot').attr('left'));
          $('.robot').animate({left: "-=42"}, 0);
        }
        break;

        case 38: // up
        if (robot.position().top !== 10) {
          $('.robot').animate({top:"-=46"},0);
          console.log('move up');
        }
        break;

        case 39: // right
        if (robot.position().left !== 304) {
          $('.robot').animate({left:"+=42"},0);
          console.log('move right');
        }
        break;

        case 40: // down
        if (robot.position().top !== 332) {
          $('.robot').animate({top:"+=46"},0);
          console.log('move down');
        }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
