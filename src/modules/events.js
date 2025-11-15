import { input, showError, updateWeather } from "./dom";
import { getWeather } from "./api";

// Events function
export function events() {
  document.querySelector(".search-btn").addEventListener("click", async () => {
    const city = input.value.trim();

    if (city.length === 0 || /^\d+$/.test(city) || city.length < 2) {
      alert("Enter a valid location.");
      return;
    }

    const data = await getWeather(city);

    if (!data) {
      showError();
      return;
    }

    updateWeather(data);
  });
}
