export const input = document.querySelector("#location-input");
const content = document.querySelector("#container");

// --- Helper: Format date to "Nov 14" ---
function formatShortDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// --- Clear ONLY previous weather UI ---
export function clearWeather() {
  const oldWeather = document.querySelector(".weather-wrapper");
  if (oldWeather) oldWeather.remove();
}

// --- Display Weather UI ---
export function updateWeather(data) {
  // Remove previous weather results
  clearWeather();

  // Create wrapper for all weather UI
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
  currentDate.textContent = formatShortDate(data.days[0].datetime);

  const degrees = document.createElement("h1");
  degrees.textContent = `${Math.round(data.currentConditions.temp)} °C`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${Math.round(data.currentConditions.humidity)}%`;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like: ${Math.round(data.currentConditions.feelslike)}°C`;

  const uvIndex = document.createElement("p");
  uvIndex.textContent = `UV-index: ${Math.round(data.currentConditions.uvindex)}`;

  // ----- Next 5 days box group -----
  const nextDayBoxGroup = document.createElement("div");
  nextDayBoxGroup.classList.add("next-day-box-group");

  for (let i = 1; i <= 5; i++) {
    const box = document.createElement("div");
    box.classList.add("next-day-box");

    const day = document.createElement("p");
    day.classList.add("small-day-date");
    day.textContent = formatShortDate(data.days[i].datetime);

    const temp = document.createElement("p");
    temp.classList.add("small-day-temp");
    temp.textContent = `${Math.round(data.days[i].temp)} °C`;

    box.append(day, temp);
    nextDayBoxGroup.appendChild(box);
  }

  // Append main and small boxes to wrapper
  mainWeatherBox.append(
    location,
    currentDate,
    degrees,
    humidity,
    feelsLike,
    uvIndex
  );

  wrapper.append(mainWeatherBox, nextDayBoxGroup);

  // Add wrapper to page
  content.appendChild(wrapper);
}

// --- Error UI ---
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
