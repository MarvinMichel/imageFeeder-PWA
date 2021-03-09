import { getImageData } from '../../modules/getImageData.js'

import DetailImage from '../atoms/DetailImage.js'
import DetailSummary from '../molecules/DetailSummary.js'

async function DetailModal(endpoint, param) {
  const {
    alt_description,
    urls: { small: src },
    likes,
    user: { name, links: { html } },
    downloads,
    links: { download }
  } = await getImageData(endpoint, param)

  const main = document.querySelector('main')

  const modal = document.createElement('aside')
  const modalBackground = document.createElement('div')

  modal.classList.add('modal')
  modal.appendChild(modalBackground)
  modal.insertAdjacentHTML('beforeend', (`
    <article class="modal--content">
      ${DetailImage(src, alt_description)}
      ${DetailSummary(name, likes, downloads, html, download)}
    </article>
  `))

  modalBackground.classList.add('modal--background')
  modalBackground.setAttribute('aria-hidden', true)
  modalBackground.setAttribute('role', 'none')
  modalBackground.addEventListener('click', () => {
    main.removeChild(modal)
  })

  return modal
}

export default DetailModal