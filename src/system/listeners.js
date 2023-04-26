/**
 * Adds a new event listener that is tuned for the given keycode
 * @function
 * @param {string} key The keycode
 */
function addKeyListeners (key) {
  document.addEventListener('keydown', (e) => {
    if (e.key == key) {
      return true
    }
  })
}
export { addKeyListeners }
