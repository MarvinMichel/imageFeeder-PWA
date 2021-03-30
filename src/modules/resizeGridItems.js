import imagesLoaded from 'imagesloaded'

const grid = document.querySelector('.feed')
const gridCells = document.querySelectorAll('.feed--image')

/**
 * Dynamically set row-span from image container
 * @param {Element} item cell from the masonry grid
 */
function resizeGridItem(item) {
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
  const itemHeight = item.querySelector('.content-wrapper').getBoundingClientRect().height
  const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap))
  item.style.gridRowEnd = `span ${rowSpan}`
}

// Loop trough multiple items
function resizeGridItems() {
  gridCells.forEach(gridCell => {
    imagesLoaded(gridCell, resizeInstance)
  })
}

// Resize grid item after image is fully loaded
function resizeInstance(instance) {
  const item = instance.elements[0]
  resizeGridItem(item)
}

export { resizeGridItems }