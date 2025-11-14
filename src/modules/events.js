import { input, showError, updateWeather } from "./dom";
import { getWeather } from "./api";

// Validate inputs here, later

// Events function
export function events() {
  document.querySelector(".search-btn").addEventListener("click", async () => {
    // Input value
    const city = input.value;
    // Wait for data
    const data = await getWeather(city);

    // If API doesnt return valid data:
    if (!data || data === null) {
      showError();
    } else {
      // If it does, update DOM module with it
      updateWeather(data);
    }
  });
}
