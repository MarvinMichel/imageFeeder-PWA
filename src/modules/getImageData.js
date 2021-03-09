import Error from '../components/organisms/Error.js'

import { main } from '../index.js'

async function getImageData(endpoint = 'photos', param) {
  /**
 * @param apiURL baseURL from api-eindpoint 
 * @param apiKey Unsplash API-Key
 * @param param search or topic parameter(s)
 * @returns json data from image(s) of Unsplash-API
 */
  const apiURL = 'https://api.unsplash.com/'
  const apiKey = 'lbhvcWW7O-NY5XERiGF9BrvC2L05e-MWIjagBBsXr9A'
  const fetchURL = `${apiURL}${endpoint}?client_id=${apiKey}&per_page=35${param ? `${param}` : ''}`

  try {
    const response = await fetch(fetchURL)
    let data = await response.json()
    if (endpoint === 'search/photos') data = data.results
    return data
  } catch (err) {
    console.error(err)
    main.insertAdjacentHTML('beforeend', Error('Couldn\'t fetch images from API'))
  }
}

export { getImageData }