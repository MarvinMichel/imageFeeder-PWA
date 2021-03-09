const { join } = require('path')
const express = require('express')

const app = express()
const PORT = 8080

const publicPath = join(__dirname, "public")

app
  .set('view engine', 'ejs')
  .set('views', 'components/pages')
  .use(express.urlencoded({ extended: true }))
  .use(express.static(publicPath))
  .use('/', require('./routes/topics'))
  .listen(PORT, () => console.log(`Server started at port ${PORT}`))