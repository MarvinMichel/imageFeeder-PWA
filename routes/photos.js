const router = require('express').Router()
const { getImageData } = require('../middleware/getImageData')

router.get('/:id', async (req, res) => {
  const image = await getImageData(`photos/${req.params.id}`)
  res.render('detail', { image })
})

module.exports = router