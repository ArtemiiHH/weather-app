export const input = document.querySelector("#location-input");
const content = document.querySelector("#container");

// Clear ONLY the weather UI, not input/buttons
export function clearWeather() {
  const oldWeather = document.querySelector(".weather-wrapper");
  if (oldWeather) oldWeather.remove();
}

// Display Weather UI
export function updateWeather(data) {
  // Remove previous weather UI
  clearWeather();

  // Create a wrapper for ALL weather elements
  const wrapper = document.createElement("div");
  wrapper.classList.add("weather-wrapper");

  // ----- Main weather box -----
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

  // ----- Next day boxes -----
  const nextDayBoxGroup = document.createElement("div");
  nextDayBoxGroup.classList.add("next-day-box-group");

  for (let i = 1; i <= 5; i++) {
    const box = document.createElement("div");
    box.classList.add("next-day-box");

    const day = document.createElement("p");
    day.textContent = data.days[i].datetime;

    const temp = document.createElement("p");
    temp.textContent = `${data.days[i].temp} °C`;

    box.append(day, temp);
    nextDayBoxGroup.appendChild(box);
  }

  // Append to wrapper
  mainWeatherBox.append(
    location,
    currentDate,
    degrees,
    humidity,
    feelsLike,
    uvIndex
  );

  wrapper.append(mainWeatherBox, nextDayBoxGroup);

  // Add wrapper to container BELOW your input + button
  content.appendChild(wrapper);
}

export function showError(message = "Invalid location.") {
  clearWeather();

  const wrapper = document.createElement("div");
  wrapper.classList.add("weather-wrapper");

  const error = document.createElement("p");
  error.classList.add("error-message");
  error.textContent = message;

  wrapper.appendChild(error);
  content.appendChild(wrapper);
}
