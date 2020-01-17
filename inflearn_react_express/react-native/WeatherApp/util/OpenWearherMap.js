const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';


function getWeatherUrl(zip){
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}


function fetchForecast(zip){
    return fetch(getWeatherUrl(zip))
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    return {
                        main : responseJson.weather[0].main,
                        description : responseJson.weather[0].description,
                        temp : responseJson.main.temp
                    }
            })
            .catch(err =>{
                console.log(err);
            })
}


export default { fetchForecast : fetchForecast };