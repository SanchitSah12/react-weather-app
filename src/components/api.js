
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
   
export const weatherApiUrl = `https://api.openweathermap.org/data/2.5`;

export const weatherApiKey = process.env.REACT_APP_GEOAPIKEY;