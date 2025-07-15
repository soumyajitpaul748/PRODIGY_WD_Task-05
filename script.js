async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "1d73db7b531c3edc887612028332672a";  // <--- paste your key inside quotes
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const resultDiv = document.getElementById("weatherResult");

  if (data.cod === 200) {
    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
    resultDiv.innerHTML = weather;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">City not found!</p>`;
  }
}
