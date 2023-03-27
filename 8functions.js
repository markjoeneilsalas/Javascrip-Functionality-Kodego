
//start of calculator

function add(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = parseInt(var1) + parseInt(var2);
}

function minus(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 - var2;
}

function times(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 * var2;
}

function divide(){
    var var1 = document.getElementById("input1").value;
    var var2 = document.getElementById("input2").value;

    document.getElementById("Result").innerHTML = var1 / var2;
}

//end of calculator

//start of nightmodez
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function whiteMode() {
    var element = document.body;
    element.classList.toggle("white-mode");
 }
//end of nightmodez

//start of cartBadge
let cartBadgeIcon = 0;

function cartBadge1() {
    cartBadgeIcon++;
    document.getElementById("cartBadgeIcon").innerHTML = cartBadgeIcon;
}

function resetCart() {
    cartBadgeIcon = 0;
    document.getElementById("cartBadgeIcon").innerHTML = cartBadgeIcon;
}

//end of cartBadge
const api = {
    key: "2fa73590fd8b5a4c6e68098ad5625395",
    base: "https://api.openweathermap.org/data/2.5/"
  };
  
  const searchbox = document.querySelector(".search-box");
  searchbox.addEventListener("keypress", setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
  }
  
  function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  
    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector(".hi-low");
    hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
  }
  
  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

// tictactoe

function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}

// tictactoe

var msg1 = document.getElementById("message1") var msg2 = document.getElementById("message2") var msg3 = document.getElementById("message3") var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Your Guess is Too low"
            msg2.textContent = "No. Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is Too High"
            msg2.textContent = "No. Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess == answer) {
            msg1.textContent = "Yahhhh You won It!!"
            msg2.textContent = "the Number was " + answer msg3.textContent = " You guessd it in " + no_of_guesses + "Guesses";
        }
    }
}

// random jokes
const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
function getQuote() {
fetch("http://quotes.stormconsultancy.co.uk/random.json")
.then((res) => {
return res.json();
})
.then((data) => {
Quote.innerText = data.quote;
Author.innerText = `-${data.author}`;
});
}
getQuote();