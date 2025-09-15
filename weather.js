const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.20 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 }
  };
  let fetchBtn = document.getElementById("fetchBtn");
  fetchBtn.addEventListener("click", () => {
    let cityInput = document.getElementById("cityInput").value.toLowerCase();
    if (cityInput[cityCoords]) {
        document.getElementById("result").innerHTML = "City not found. Please enter a valid city.";
        return;
    }
    let coords=cityCoords[cityInput];
    let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(!data.current_weather){
            document.getElementById("result").innerHTML = "Not found the current weather data.";
            return;
        }
        document.getElementById("Weather").innerHTML =`<h3>Weather in ${cityInput.charAt(0).toUpperCase() + cityInput.slice(1)}</h3>
        <p>Temperature: ${data.current_weather.temperature}°C</p>
        <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
        <p>Wind Direction: ${data.current_weather.winddirection}°</p>`
    
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById("result").innerHTML = "Error fetching weather data. Please try again later.";
    });

        
  })