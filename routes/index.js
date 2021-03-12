const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/', async (req, res) => {
  const images = await getImageData()
  res.render('index', { images })
})

router.get('/latest', async (req, res) => {
  const images = await getImageData()
  res.render('index', { images })
})

router.get('/popular', async (req, res) => {
  const images = await getImageData('photos', '&order_by=popular')
  res.render('index', { images })
})

module.exports = router