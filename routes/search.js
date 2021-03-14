const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/', async (req, res) => {
	const query = req.query.search
	const images = await getImageData('search/photos', `&query=${query}`)
	res.render('index', { images })
})

module.exports = router