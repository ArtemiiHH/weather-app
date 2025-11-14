export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=FWRFKQ837QJ9VNNBZK4DKNPY6`
    );

    // Error handling
    if (!response.ok) {
      throw new Error("City or location was not found.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
