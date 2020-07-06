"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var result;
function getweather(cityName) {
    return axios_1["default"].get("http://api.weatherstack.com/current?access_key=a55fe211358961045e7643e38ac177cd&query=" + cityName)
        // the JSON body is taken from the response
        .then(function (res) {
        result = {
            time: res.data.location.localtime.split(' ')[1],
            weather: res.data.current.weather_descriptions[0]
        };
        console.log(result);
        return result;
    });
}
getweather('ajax');
