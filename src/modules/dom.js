export const input = document.querySelector("#location-input");
const content = document.querySelector("#container");

// Display Weather UI
export function updateWeather(data) {
  console.log(data);
  // Display Main weather box
  const mainWeatherBox = document.createElement("div");
  mainWeatherBox.classList.add("main-weather-box");

  const location = document.createElement("h2");
  location.classList.add("location");
  location.textContent = data.address;

  const currentDate = document.createElement("p");
  currentDate.classList.add("current-date");
  currentDate.textContent = data.days[0].datetime;

  const degrees = document.createElement("h1");
  degrees.textContent = `${data.currentConditions.temp} °C`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like: ${data.currentConditions.feelslike}`;

  const uvIndex = document.createElement("p");
  uvIndex.textContent = `UV-index: ${data.currentConditions.uvindex}`;

  // Small, next day boxes
  const nextDayBoxGroup = document.createElement("div");
  nextDayBoxGroup.classList.add("next-day-box-group");

  const boxOne = document.createElement("div");
  boxOne.classList.add("next-day-box");

  const boxTwo = document.createElement("div");
  boxTwo.classList.add("next-day-box");

  const boxThree = document.createElement("div");
  boxThree.classList.add("next-day-box");

  const boxFour = document.createElement("div");
  boxFour.classList.add("next-day-box");

  const boxFive = document.createElement("div");
  boxFive.classList.add("next-day-box");

  // Append elements
  mainWeatherBox.append(
    location,
    currentDate,
    degrees,
    humidity,
    feelsLike,
    uvIndex
  );
  nextDayBoxGroup.append(boxOne, boxTwo, boxThree, boxFour, boxFive);
  content.appendChild(mainWeatherBox);
  content.appendChild(nextDayBoxGroup);
}

export function showError() {
  console.log("Error");
}

export function clearWeather() {}
