// dom
var userFormEl = document.getElementById("user-form");
var cityInputEl = document.getElementById("city-input");
var pastCitiesEl = document.getElementById("past-cities");
var weatherEl = document.getElementById("weather");
var cityEl = document.getElementById("city-name");
var tempEl = document.getElementById("temp");
var humEl = document.getElementById("humidity");
var windEl = document.getElementById("wind");
var iconEl = document.getElementById("icon");
var day1El = document.getElementById("date1");
var day2El = document.getElementById("date2");
var day3El = document.getElementById("date3");
var day4El = document.getElementById("date4");
var day5El = document.getElementById("date5");
var day1TempEl = document.getElementById("temp1");
var day1HumEl = document.getElementById("humidity1");
var day1WindEl = document.getElementById("wind1");
var day2TempEl = document.getElementById("temp2");
var day2HumEl = document.getElementById("humidity2");
var day2WindEl = document.getElementById("wind2");
var day3TempEl = document.getElementById("temp3");
var day3HumEl = document.getElementById("humidity3");
var day3WindEl = document.getElementById("wind3");
var day4TempEl = document.getElementById("temp4");
var day4HumEl = document.getElementById("humidity4");
var day4WindEl = document.getElementById("wind4");
var day5TempEl = document.getElementById("temp5");
var day5HumEl = document.getElementById("humidity5");
var day5WindEl = document.getElementById("wind5");


// current date
var today = moment().format("l");
 
// dates for five day forecast
var day1 = moment().add(1, "days").format("l");
var day2 = moment().add(2, "days").format("l");
var day3 = moment().add(3, "days").format("l");
var day4 = moment().add(4, "days").format("l");
var day5 = moment().add(5, "days").format("l");

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from input element
    var cityname = cityInputEl.value;

    if (cityname !== "") {
        getCoord(cityname);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
}


// call api fo get latitude and longitude
function getCoord(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&exclude=hourly,minutely&units=imperial&appid=3807171296acde7407775611a1943108";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    inputCoord(data);
                });
            }
        })
}

var inputCoord = function(data) {
    let latitude = data.coord.lat;
    let longitude = data.coord.lon;
    let cityname = data.name;

    var cityElValue = document.createElement("span");
    cityElValue.textContent = cityname + "  " + today;
    cityEl.appendChild(cityElValue);

    var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely&units=imperial&appid=3807171296acde7407775611a1943108";

    fetch(apiUrl2)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
                });
            }
        })

    var displayWeather = function(data) {
        let temperature = data.current.temp + "\u00B0 F"; 
        let humidity = data.current.humidity + "%";
        let wind = data.current.wind_speed + "mph";
        let day1temp = data.daily[1].temp.day + "\u00B0 F";
        let day1hum = data.daily[1].humidity + "%";
        let day1wind = data.daily[1].wind_speed + "mph";
        let day2temp = data.daily[2].temp.day + "\u00B0 F";
        let day2hum = data.daily[2].humidity + "%";
        let day2wind = data.daily[2].wind_speed + "mph";
        let day3temp = data.daily[3].temp.day + "\u00B0 F";
        let day3hum = data.daily[3].humidity + "%";
        let day3wind = data.daily[3].wind_speed + "mph";
        let day4temp = data.daily[4].temp.day + "\u00B0 F";
        let day4hum = data.daily[4].humidity + "%";
        let day4wind = data.daily[4].wind_speed + "mph";
        let day5temp = data.daily[5].temp.day + "\u00B0 F";
        let day5hum = data.daily[5].humidity + "%";
        let day5wind = data.daily[5].wind_speed + "mph";

        var tempElValue = document.createElement("span");
        tempElValue.textContent = temperature;
        tempEl.appendChild(tempElValue);

        var humElValue = document.createElement("span");
        humElValue.textContent = humidity;
        humEl.appendChild(humElValue);

        var windElValue = document.createElement("span");
        windElValue.textContent = wind;
        windEl.appendChild(windElValue);

        day1El.textContent = day1;
        day2El.textContent = day2;
        day3El.textContent = day3;
        day4El.textContent = day4;
        day5El.textContent = day5;

        var day1TempElValue = document.createElement("span");
        day1TempElValue.textContent = day1temp;
        day1TempEl.appendChild(day1TempElValue);
        var day1HumElValue = document.createElement("span");
        day1HumElValue.textContent = day1hum;
        day1HumEl.appendChild(day1HumElValue);
        var day1WindElValue = document.createElement("span");
        day1WindElValue.textContent = day1wind;
        day1WindEl.appendChild(day1WindElValue);
        var day2TempElValue = document.createElement("span");
        day2TempElValue.textContent = day2temp;
        day2TempEl.appendChild(day2TempElValue);
        var day2HumElValue = document.createElement("span");
        day2HumElValue.textContent = day2hum;
        day2HumEl.appendChild(day2HumElValue);
        var day2WindElValue = document.createElement("span");
        day2WindElValue.textContent = day2wind;
        day2WindEl.appendChild(day2WindElValue);
        var day3TempElValue = document.createElement("span");
        day3TempElValue.textContent = day3temp;
        day3TempEl.appendChild(day3TempElValue);
        var day3HumElValue = document.createElement("span");
        day3HumElValue.textContent = day3hum;
        day3HumEl.appendChild(day3HumElValue);
        var day3WindElValue = document.createElement("span");
        day3WindElValue.textContent = day3wind;
        day3WindEl.appendChild(day3WindElValue);
        var day4TempElValue = document.createElement("span");
        day4TempElValue.textContent = day4temp;
        day4TempEl.appendChild(day4TempElValue);
        var day4HumElValue = document.createElement("span");
        day4HumElValue.textContent = day4hum;
        day4HumEl.appendChild(day4HumElValue);
        var day4WindElValue = document.createElement("span");
        day4WindElValue.textContent = day4wind;
        day4WindEl.appendChild(day4WindElValue);
        var day5TempElValue = document.createElement("span");
        day5TempElValue.textContent = day5temp;
        day5TempEl.appendChild(day5TempElValue);
        var day5HumElValue = document.createElement("span");
        day5HumElValue.textContent = day5hum;
        day5HumEl.appendChild(day5HumElValue);
        var day5WindElValue = document.createElement("span");
        day5WindElValue.textContent = day5wind;
        day5WindEl.appendChild(day5WindElValue);
    }
}

// Event listener
userFormEl.addEventListener("submit", formSubmitHandler);