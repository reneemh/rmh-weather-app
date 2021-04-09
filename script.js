let currentTime = new Date();
console.log(currentTime);
console.log(currentTime.getMilliseconds());
console.log(currentTime.getDay());
console.log(currentTime.getFullYear());
console.log(currentTime.getMonth());

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let month = [
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

  let currentYear = currentTime.getFullYear();
  let currentDay = days[currentTime.getDay()];
  let currentMonth = month[currentTime.getMonth()];
  let currentDate = currentTime.getDate();

  let formatteddate = ` ${currentDay}, ${currentMonth}, ${currentDate}, ${currentYear}`;

  return formatteddate;
}

function search(event) {
  event.preventDefault();

  let cityElement = document.querySelector("#the-city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    console.log(response);

    let theTemp = document.querySelector("#the-temp");
    theTemp.innerHTML = temperature;
  }
  
  let apiKey = "49f8324517bfd8f8166706e94ce6fca3";
  let units = "metric";
  let city = cityInput.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showTemperature);
}

let myTime = document.querySelector("#my-time");
myTime.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
