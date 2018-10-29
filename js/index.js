//we can also use this
// $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function (sunset_info){
// var sunset = sunset_info.query.results.channel.astronomy.sunset;
// $("span").text(sunset);
// });



//we can also use this
$.getJSON("https://api.sunrise-sunset.org/json?lat=20.5937&lng=78.9629&date=today",function (sunset_info){
var sunset = sunset_info.results.sunset;
$("span").text(sunset);
});
