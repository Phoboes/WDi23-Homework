let robot;



const newGrid = function(){

};//newGrid

$(document).ready(function(){

  const directions = ["up", "right", "down", "left"];

  const createBoard = function (){
    let $board = $('<table></table>');
    $('body').append($board);

    for (let i = 0; i < 9; i++) {
      let $row = $('<tr></tr>');
      $('table').append($row);
      for (let j = 0; j < 9; j++) {
        $square = $('<td></td>');
        $row.append($square);
      };//j loop
    }; //i loop
  };//createBoard function

  const Robot = function (){
    let x = 0;
    let y = 0;
    let dir = "up";

    let $bot = $('<div></div>');
    $bot.addClass(`robot ${dir}`);
    $('body').append($bot);

    const moveRobot = function (){
      $bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + "px");
      $bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + "px");
    }; //moveRobot function

    moveRobot();

    const turn = function(direction){
      $('.robot').removeClass('up down left right');

      if (direction === 'left'){
        if (directions.indexOf(dir > 0)){
          dir = directions[directions.indexOf(dir)-1];
        }else {
        dir = directions[3];
        }
      }else {
        if(directions.indexOf(dir) < 3){
          dir = directions[direcitons.indexOf(dir) + 1];
        }else {
          dir = directions[0];
        }
      }
      $('.robot').addClass(dir);
    }; //turn function

    const advance = function (step) {
      step = step || 1;

      if (dir === "up"){
        y = y - step;
      }else if(dir === "down"){
        y = y + step;
      }else if(dir === "left"){
        x = x - step;
      }else if(dir === "right"){
        x = x + step;
      }//if
      moveRobot();
    };//advance function

    return {
      advance: advance,
      left: function (){
        turn('left');
      },
      right: function() {
        turn('right');
      },
    };//return object
  };//Robot

  createBoard();
  robot = new Robot();
});//document ready

$(document).keyup(function(e){
  console.log(e);
  if (e.keyCode === 38){
    robot.advance(1);
  }else if(e.keyCode === 37){
    robot.left();
  }else if(e.keyCode === 39){
    robot.right();
  }else if(e.keyCode === 40){
    robot.advance(-1);
  }
});//key up function
