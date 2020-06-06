import {DomListener} from '@core/DomListener'

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    if (options.observer) {
      this.observer = options.observer
    }
    this.subscribtions = []
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

  subscribe(event, fn) {
    const unsub = this.observer.subscribe(event, fn)
    this.subscribtions.push(unsub)
  }

  dispatch(event, data) {
    this.observer.emit(event, data)
  }

  destroy() {
    this.removeListeners()
    this.subscribtions.forEach(unsub => unsub())
  }
}