import {DomListener} from '@core/DomListener'

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    if (options.observer) {
      this.observer = options.observer
    }
    this.store = options.store
    this.subscribes = options.subscribes || []
    this.unsubscribers = []
    // console.log(this.store.getState())
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

  $subscribe(event, fn) {
    if (Array.isArray(event)) {
      event.forEach(event => {
        const unsub = this.observer.subscribe(event, fn)
        this.unsubscribers.push(unsub)
      })
    }
    const unsub = this.observer.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $emit(event, data) {
    this.observer.emit(event, data)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  isWatching(key) {
    return this.subscribes.includes(key)
  }

  storeChanged(data) {
    console.log('hello')
  }

  destroy() {
    this.removeListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}