function Button(content, type) {
  const button = document.createElement('button')
  button.classList.add('button')
  type === 'submit' ? button.setAttribute('type', type) : null
  button.insertAdjacentHTML('beforeend', content)

  return button
}

export default Button