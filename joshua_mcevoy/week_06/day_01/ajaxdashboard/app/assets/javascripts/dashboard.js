$(document).ready(function (){
  // setInterval(function(){
  //   // $.get('/brother').done(function(b){
  //   //   $('#brother').text(b);
  //   // }); //get borther function
  //   $("#brother").load('/brother');
  // }, 4000);//setInterval
  //
  // setInterval(function(){
  //   // $.get('/time').done(function(t){
  //   //   $('#time').text(t);
  //   // }); //get time function
  //   $("#time").load('/time');
  // }, 1000);//setInterval
  //
  // setInterval(function(){
  //   $("#uptime").load('/uptime');
  // }, 5000);//setInterval

  setInterval(function(){
    $.get('/info').done(function (data) {
      $('#brother').text(data.brother);
      $('#time').text(data.time);
      $('#uptime').text(data.uptime);
    });
  }, 1000);
}); // document ready
