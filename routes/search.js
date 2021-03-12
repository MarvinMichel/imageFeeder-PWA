const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/:query', async (req, res) => {
	const query = req.params.query
	console.log(query)
	// const images = await getImageData('search/photos', `&query=${query}`)
	// res.render('index', { images })
})

module.exports = router