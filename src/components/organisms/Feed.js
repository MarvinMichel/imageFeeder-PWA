import { getImageData } from '../../modules/getImageData.js'

import Image from '../molecules/Image.js'
import DetailModal from './DetailModal.js'

import { main } from '../../index.js'

async function Feed(endpoint, param) {
  // Create feed section
  const feedContainer = document.createElement('section')
  feedContainer.classList.add('feed')
  feedContainer.addEventListener('click', event => {
    const target = event.target
    
    if (target.tagName === 'IMG') {
      DetailModal(`photos/${target.id}`, undefined)
        .then(renderData => main.append(renderData))
    }
  })

  // Fetch images and inject them into feed section
  const images = await getImageData(endpoint, param)
  images.map(image => {
    const { id, urls: srcset, alt_description: alt, user: { username } } = image
    feedContainer.insertAdjacentHTML('beforeend', Image(id, srcset, alt, username))
  }).join('')

  return feedContainer
}

export default Feed