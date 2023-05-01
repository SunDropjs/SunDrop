class TextObject {
  constructor (text = '', x = 0, y = 0) {
    this.text = text
    this.pos = { x, y }
    this.props = {}
    this.type = 'text'
  }
}

export { TextObject }
