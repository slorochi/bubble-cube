export default class DomElement {
    constructor(id) {
        this.id = id
        this.element = document.getElementById(id)
        this.setSize()
    }

    setSize() {
        const rect_ = this.element.getBoundingClientRect()
        this.width = rect_.width
        this.height = rect_.height
        this.position = {
            left: rect_.left,
            top: rect_.top,
            right: rect_.right,
            bottom: rect_.bottom
        }
    }
}