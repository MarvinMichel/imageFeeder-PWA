import NavList from '../molecules/NavList.js'

function Navigation() {
  const nav = document.createElement('nav')
  nav.insertAdjacentElement('beforeend', NavList())
  
  return nav
}

export default Navigation