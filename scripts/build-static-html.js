const fs = require('fs')
const dotenv = require('dotenv')
const ejs = require('ejs')
const fetch = require('node-fetch')
const { join } = require('path')

const fsPromises = fs.promises
dotenv.config()

buildHome()
buildTopics()

async function getImageData(endpoint = 'photos', param) {
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

async function buildHome() {
  const images = await getImageData()
  const renderData = {
    title: 'Feed',
    images: images
  }

  const html = renderHTML('./components/pages/index.ejs', renderData)
  createFile('./public', 'index.html', html)
}

function buildTopics() {
  const topics = [
		'Animals',
		'Architecture',
		'Business & Work',
		'Current Events',
		'Experimental',
		'Fashion',
		'Film',
		'Health',
    'Interiors',
    'Latest',
		'Nature',
    'People',
    'Popular',
		'Street Photography',
		'Technology',
		'Textures & Patterns',
		'Travel',
		'Wallpapers'
  ]

  topics.map(async (topic) => {
    topic = topic.replace('&', '').replace(/\s+/g, '-').toLowerCase()
    let images

    if (topic === 'latest') {
      images = await getImageData()
    } else if (topic === 'popular') {
      images = await getImageData('photos', '&order_by=popular')
    } else {
      images = await getImageData(`topics/${topic}/photos`)
    }
    const renderData = {
      title: 'Feed',
      images: images
    }

    const html = renderHTML('./components/pages/index.ejs', renderData)
    createFile('./public', `${topic}.html`, html)
  })
}

/**
 * @param {String} path relative path to view template
 * @param {Object} data image data
 * @returns template string with HTML
 */
function renderHTML(path, data) {
  const template = fs.readFileSync(path, 'utf-8').toString()
  return ejs.render(template, data, {
    views: [join(__dirname, '../', 'components' ,'pages')]
  })
}

/**
 * * { recursive: true } parent folders should be created
 * @param {String} dir relative path to file directory
 * @param {String} name name of the file
 * @param {String} content HTML template
 * @returns 
 */
function createFile(dir, name, content) {
  return fsPromises.mkdir(dir, { recursive: true })
    .then(() => {
      return fsPromises.writeFile(join(dir, name), content)
    })
}