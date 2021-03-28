const express = require('express')
const compression = require('compression')
const { join } = require('path')

const app = express()
const { urlencoded, static } = express

const PORT = process.env.PORT || 8080
const publicPath = join(__dirname, "public")

app
  .use(urlencoded({ extended: true }))
  .use(static(publicPath))
  .use(compression())
  .get('/', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'))
  })
  .get('/topics/:topic', (req, res) => {
    res.sendFile(join(publicPath, `${req.params.topic}.html`))
  })
  .get('/offline', (req, res) => {
    res.sendFile(join(publicPath, '404.html'))
  })
  // .use('/search', require('./routes/search'))
  // .use('/photos', require('./routes/photos'))
  .listen(PORT, () => console.log(`Server started at port ${PORT}`))