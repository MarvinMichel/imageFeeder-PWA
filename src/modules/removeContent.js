/**
 * Removes all children elements of parent
 * @param parent HTML parent element with children 
 * @returns empty parent
 */
function removeContent(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export { removeContent }