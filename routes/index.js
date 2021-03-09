const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/', async (req, res) => {
  const images = await getImageData()
  res.render('index', { images })
})

module.exports = router