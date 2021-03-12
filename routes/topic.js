const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/:topic', async (req, res) => {
	const images = await getImageData(`topics/${req.params.topic}/photos`)
	res.render('index', { images })
})
  
module.exports = router