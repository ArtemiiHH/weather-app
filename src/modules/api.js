async function getWeather() {
  const url = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=us&key=FWRFKQ837QJ9VNNBZK4DKNPY6&contentType=json"
  );

  const urls = await url.json();

  console.log(urls);
}

export { getWeather };
