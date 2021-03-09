import ImagePhoto from '../atoms/ImagePhoto.js'
import ImageDescription from '../atoms/ImageDescription.js'

function Image(id, srcset, alt, desc) {
  return `
    <figure class="feed--image" tabindex="0">
      ${ImagePhoto(srcset, alt, id)}
      ${ImageDescription(desc)}
    </figure>`
}

export default Image