const fetchWeather = function (){

  const location = document.getElementById('input').value;
  console.log(location);


  $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0a5990c668bec2e46a5952cbd13e692d`).done(function(info){
    console.log(info);
    const weather = info.weather[0].description;
    // const location =
    const kelvin = info.main.temp;
    const cel = parseInt(kelvin-273.15);
    const fah = parseInt(((kelvin-273.15)*1.8)+32);
    const pressure = info.main.pressure;
    const humidity = info.main.humidity;

    $("#currentWeather").html(`${weather}`);
    $("#locationName").html(`${location}`);
    $("#tempText").html(`Current Temperature`);
    $("#currentTemp").html(`Temperature: ${cel}`);
    $("#currentPressure").html(`Pressure: ${pressure}`);
    $("#currentHumidity").html(`Humidity: ${humidity}`);



}).fail(function (){
  alert('There was an error')
});//fail function
};//fetchWeather function

const fahToCal = function (){
  console.log(`clicked`);
};//fahToCal function


$(document).ready(function (){
  $('#search').on('click', fetchWeather);
  $('#currentTemp').on('click', fahToCal);
});//doc ready function
