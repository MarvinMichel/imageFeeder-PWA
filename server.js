require('dotenv').config()

const { join } = require('path')
const express = require('express')
const fetch = require('node-fetch')

const app = express()
const PORT = 8080

const publicPath = join(__dirname, "public")

app
  .set('view engine', 'ejs')
  .set('views', 'components/pages')
  .use(express.urlencoded({ extended: true }))
  .use(express.static(publicPath))
  .use('/', require('./routes/index'))
  .listen(PORT, () => console.log(`Server started at port ${PORT}`))

async function getImageData(endpoint = 'photos', param) {
  const apiURL = process.env.API_URL
  const apiKey = process.env.API_KEY
  const fetchURL = `${apiURL}${endpoint}?client_id=${apiKey}&per_page=35${param ? `${param}` : ''}`

  try {
    const response = await fetch(fetchURL)
    let data = await response.json()
    if (endpoint === 'search/photos') data = data.results
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}