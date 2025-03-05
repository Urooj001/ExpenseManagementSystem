document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; 
    
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    document.getElementById('weatherResult').innerText = "City not found. Please try again.";
                } else {
                    const temperature = data.main.temp;
                    const weatherDescription = data.weather[0].description;
                    document.getElementById('weatherResult').innerText = `Temperature: ${temperature}°C \nDescription: ${weatherDescription}`;
                }
            })
            .catch(error => {
                document.getElementById('weatherResult').innerText = "Error fetching weather data.";
            });
    } else {
        document.getElementById('weatherResult').innerText = "Please enter a city name.";
    }
}