function DetailSummaryItem({ id, value: data, url }) {
  let className

  if (id === 'user') {
    className = 'gg-user'
  } else if (id === 'likes') {
    className = 'gg-heart'
  } else {
    className = 'gg-software-download'
  }

  return `
    <li class="modal--content__summary--item">
      <i class=${className}></i>
      ${url ? `<a href=${url} target="_blank">${data}</a>` : data}
    </li>
  `
}

export default DetailSummaryItem