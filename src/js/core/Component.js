import {DomListener} from '@core/DomListener'

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    if (options.observer) {
      this.observer = options.observer
    }
  }

  init() {}

  toHTML() {}

  render() {
    this.$root.html(this.toHTML())
    this.afterRender()
  }

  afterRender() {
    this.initListeners()
  }

  destroy() {
    this.removeListeners()
  }
}