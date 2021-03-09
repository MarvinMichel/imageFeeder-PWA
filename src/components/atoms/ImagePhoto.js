function ImagePhoto(srcset, alt, id) {
  return `
    <picture class="feed--image__photo">
      <source 
        media="(min-width: 1600px)"
        srcset=${srcset.regular}
      >
      <img src=${srcset.small} alt="${alt}" id=${id} loading="lazy" />
    </picture>
  `
}

export default ImagePhoto