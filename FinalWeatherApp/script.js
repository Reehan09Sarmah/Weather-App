const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad33b7d80fmsh31f54930c8df648p17c343jsn700a26531ff3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city.toUpperCase()
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {

            // Accessing them by their id names.
            console.log(response)
            temp.innerHTML = response.temp

            if (response.temp <= 0) {
                feels_like.innerHTML = `Freezing`
            }
            else if (response.temp <= 10 && response.temp > 0) {
                feels_like.innerHTML = `Very Cold`
            }
            else if (response.temp <= 15 && response.temp > 10) {
                feels_like.innerHTML = ` Quite Cold`
            }
            else if (response.temp > 15 && response.temp <= 30) {
                feels_like.innerHTML = `Warm`
            }
            else if (response.temp > 30 && response.temp <= 40) {
                feels_like.innerHTML = `Hot`
            }
            else if (response.temp > 40) {
                feels_like.innerHTML = `Burning`
            }

            cloud_pct.innerHTML = `${response.cloud_pct}`
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            humidity.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
