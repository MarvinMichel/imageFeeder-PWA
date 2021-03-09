function resizeGridItem(item) {
  /**
   * Resize grid-item's height based rowHeight
   * @const rowSpan how many rows to take in grid
  */
  const grid = document.querySelector('.feed')
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
  const itemHeight = item.getBoundingClientRect().height
  const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap))
  item.style.gridRowEnd = `span ${rowSpan}`
}

// Loop trough multiple items
function resizeGridItems() {
  const gridCells = document.querySelectorAll('.feed--image')
  gridCells.forEach(gridCell => {
    resizeGridItem(gridCell)
  })
}

// Resize grid item after image is fully loaded
function resizeInstance(instance){
  const item = instance.elements[0]
  resizeGridItem(item)
}

export { resizeGridItems, resizeInstance }