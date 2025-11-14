export async function getWeather(city) {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=metric&key=FWRFKQ837QJ9VNNBZK4DKNPY6&contentType=json"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("City or location was not found.");
    }

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
