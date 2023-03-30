// const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359'

const TravelAppAPIKey = process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': TravelAppAPIKey,
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

export const getLocationsData = async (sw, ne) => {
    try {
        console.log(sw, ne);
        const url = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}`
        const response = await fetch(url, options)
        const data = await response.json()
        return data.data
    }
    catch (error) {
        console.error(error)
    }
    
}