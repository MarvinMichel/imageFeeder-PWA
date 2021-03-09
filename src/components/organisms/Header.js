// Components
import PageTitle from '../atoms/PageTitle.js'
import SubTitle from '../atoms/SubTitle.js'
import SearchForm from '../molecules/SearchForm.js'

function Header() {
  const header = document.createElement('header')
  header.insertAdjacentHTML('beforeend', PageTitle('ImageFeeder'))
  header.insertAdjacentHTML('beforeend', SubTitle('Feed yourself some images'))
  header.append(SearchForm())
  return header
}

export default Header