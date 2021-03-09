// Set active class to tab based on url
function setActiveTab(path) {
  const navListItems = document.querySelectorAll('.main-nav--link')

  navListItems.forEach(item => {
    let tabText = item.textContent.replace('&', '').replace(/\s+/g, '-').toLowerCase()
    if (path === '') path = 'latest'
    tabText === path
      ? item.classList.add('active')
      : item.classList.remove('active')
  })
}

export { setActiveTab }