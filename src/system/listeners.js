function addKeyListeners(key = '') {
  document.addEventListener("keydown", (e) => {
    if (e.key == key) {
      return true;
    }
  });
}

export { addKeyListeners };