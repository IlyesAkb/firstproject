import {DomListener} from '@core/DomListener'
import {StoreSubscriber} from '@core/StoreSubscriber';

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    if (options.observer) {
      this.observer = options.observer
    }
    this.store = options.store
    this.subscribes = options.subscribes || []
    this.unsubscribers = []
    this.components = options.components || []

    if (this.components.length) {
      this.storeSubscriber = new StoreSubscriber(this.store)
    }
  }

  init() {}

  toHTML() {
  }

  initComponents() {
    const componentOptions = {
      observer: this.observer,
      store: this.store
    }

    this.components = this.components.map(Component => {
      const $componentRoot = this.$root.find(Component.selector)
      const component = new Component($componentRoot, componentOptions)
      $componentRoot.html(component.render())
      return component
    })
  }

  render() {
    this.$root.html(this.toHTML())
    this.afterRender()
  }

  afterRender() {
    this.initListeners()
    this.initComponents()
    this.subscribeComponents()
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

  storeChanged(data) {}

  subscribeComponents() {
    if (this.storeSubscriber) {
      this.storeSubscriber.subscribeComponents(this.components)
    }
  }

  unsubscribeComponents() {
    if (this.storeSubscriber) {
      this.storeSubscriber.unsubscribe()
    }
  }

  destroy() {
    this.removeListeners()
    this.unsubscribers.forEach(unsub => unsub())
    this.unsubscribeComponents()
  }
}