// Components
import Feed from '../components/organisms/Feed.js'

// Route paths and render methods
const routes = [
  {
    path: '/',
    render: () => Feed()
  },
  {
    path: '/latest',
    render: () => Feed()
  },
  {
    path: '/popular',
    render: () => Feed('photos', '&order_by=popular')
  },
  {
    path: '/:topic',
    render: params => Feed(`topics/${params.topic}/photos`)
  },
  {
    path: '/search/:query',
    render: params => Feed('search/photos', `&query=${params.query}`)
  }
]

export default routes