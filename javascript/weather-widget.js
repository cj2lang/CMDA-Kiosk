//Weather js, used in the CMDA Signage Project

async function getWeather() {
	//BR is https://api.weather.gov/stations/KBTR/observations/latest
	//change link to other cities for testing
    const endpoint = "https://api.weather.gov/stations/KBTR/observations/latest";
    try {
        let response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }
        let data = await response.json();
        
        // Convert Celsius to Fahrenheit
        const temperatureCelsius = data.properties.temperature.value;
        const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

        const description = data.properties.textDescription;
        const iconHTML = getWeatherIcon(description);  // Get the icon's HTML

        document.getElementById("weatherInfo").innerHTML = `${temperatureFahrenheit.toFixed(0)}° ${iconHTML}`; // same as function in signage, only adds the word description for testing
    } catch (error) {
        console.error("There was an error:", error);
        document.getElementById("weatherInfo").textContent = "Failed to fetch weather data.";
    }
}
	
function getWeatherIcon(description) {
	
    const desc = description.toLowerCase();

    switch (true) {
        case /clear/.test(desc):
            return '<i class="material-symbols-outlined">sunny</i>';

        case /partly cloudy/.test(desc):
            return '<i class="material-symbols-outlined">partly_cloudy_day</i>';

        case /cloudy/.test(desc):
            return '<i class="material-symbols-outlined">cloud</i>';

        case /rain/.test(desc):
            return '<i class="material-symbols-outlined">rainy</i>';

        case /stormy|thunderstorm/.test(desc):
            return '<i class="material-symbols-outlined">thunderstorm</i>';

        case /fog/.test(desc):
            return '<i class="material-symbols-outlined">foggy</i>';

        case /snow/.test(desc):
            return '<i class="material-symbols-outlined">ac_unit</i>';			

        default:
            return '<i class="material-symbols-outlined">partly_cloudy_day</i>'; //Default means no other case matches
    }
}

	getWeather();
	