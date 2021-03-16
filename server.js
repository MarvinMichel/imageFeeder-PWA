const express = require('express')
const { join } = require('path')

const app = express()
const { urlencoded, static } = express

const PORT = process.env.PORT || 8080
const publicPath = join(__dirname, "public")

app
  .set('view engine', 'ejs')
  .set('views', 'components/pages')
  .use(urlencoded({ extended: true }))
  .use(static(publicPath))
  .use('/', require('./routes/index'))
  .use('/topics', require('./routes/topics'))
  .use('/search', require('./routes/search'))
  .use('/photos', require('./routes/photos'))
  .listen(PORT, () => console.log(`Server started at port ${PORT}`))