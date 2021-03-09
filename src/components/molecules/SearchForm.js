// Router
import { router } from '../../index.js'

// Components
import Input from '../atoms/Input.js'
import Button from '../atoms/Button.js'

/**
 * Create search form with input, button and label
 * @function loadRoute for search functionality
 * @returns HTML Element <form>
 */
function SearchForm() {
  const form = document.createElement('form')
  form.addEventListener('submit', event => {
    event.preventDefault()

    const input = document.getElementById('search')
    router.loadRoute(true, 'search', input.value)
    input.value = ''
  })

  form.insertAdjacentHTML('beforeend', Input(
    'Search...',
    'text',
    'search'
  ))
  form.appendChild(Button('<i class="gg-search"></i>'))

  return form
}

export default SearchForm