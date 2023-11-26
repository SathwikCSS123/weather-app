function getWeather() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const apiUrl = `http://localhost:3000/weather/${startDate}/${endDate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error(error.message);
            document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">Error fetching weather data</p>`;
        });
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');

    if (weatherData.length === 0) {
        weatherInfo.innerHTML = '<p>No weather data available</p>';
        return;
    }

    weatherInfo.innerHTML = '';

    weatherData.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('weather-entry');
        entryDiv.innerHTML = `
            <h2>${entry.city} - ${entry.date}</h2>
            <p>Temperature: ${entry.temperature}°C</p>
            <p>Description: ${entry.description}</p>
        `;
        weatherInfo.appendChild(entryDiv);
    });
}
