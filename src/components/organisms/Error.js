function Error(message) {
  return `
    <aside class="modal">
      <div class="modal--background"></div>
      <article class="modal--content error">
        <h1 class="error--title">An error occured</h1>
        <p class="error--message">${message}</p>
      </article>
    </aside>
  `
}

export default Error