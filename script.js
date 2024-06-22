require(`dotenv`).config();
const apiKey = process.env.API_KEY;
 const base = 'https://api.openweathermap.org/data/2.5/weather';

 const locationInput = document.getElementById('locationInput');
 const searchBox = document.getElementById('searchBox');
 const locationElement = document.getElementById('location');
 const temperatureElement = document.getElementById('temperature');
 const descriptionElement = document.getElementById('description');

 searchBox.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
 });

 function fetchWeather(location) {
    const url = `${base}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
 }