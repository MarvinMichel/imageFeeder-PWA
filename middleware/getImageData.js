require('dotenv').config()

const fetch = require('node-fetch')

module.exports = {
	getImageData: async function (endpoint = 'photos', param) {
		const apiURL = process.env.API_URL
		const apiKey = process.env.API_KEY
		const fetchURL = `${apiURL}${endpoint}?client_id=${apiKey}&per_page=35${param ? `${param}` : ''}`
	  
		try {
		  const response = await fetch(fetchURL)
		  let data = await response.json()
		  if (endpoint === 'search/photos') data = data.results
		  return data
		} catch (err) {
		  console.error(err)
		}
	}
}