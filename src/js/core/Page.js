import {$} from '@core/dom'
import {StoreSubscriber} from '@core/StoreSubscriber';

export class Page {
  constructor(components = [], options = {}) {
    this.components = components
    this.observer = options.observer
    this.store = options.store
    this.storeSubscriber = new StoreSubscriber(this.store)
  }

  getRoot() {
    throw new Error('Method getRoot is not implemented')
  }

  render() {
    this.$root = $.create('div', 'page')
    this.$root.attr('data-type', 'page')
    this.$root.html(this.toHTML())
    return this.$root
  }

  toHTML() {}

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

  afterRender() {
    this.initComponents()
    this.storeSubscriber.subscribeComponents(this.components)
  }

  destroy() {
    this.components.forEach(component => component.destroy())
    this.$root.remove()
  }
}