const TravelAppAPIKey = process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
const OpenWeatherAPIKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY

export const getLocationsData = async (type, sw, ne) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': TravelAppAPIKey,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    try {
        // console.log(sw, ne);
        const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}`
        const response = await fetch(url, options)
        const data = await response.json()
        return data.data
    }
    catch (error) {
        console.error(error)
    }

}

export const getWeatherData = async (lat, lng) => {

    try {
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${OpenWeatherAPIKey}`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}