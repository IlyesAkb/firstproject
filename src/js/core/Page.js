import {$} from '@core/dom'

export class Page {
  constructor(components = [], options = {}) {
    this.components = components
    this.observer = options.observer || null
  }

  render() {
    this.$root = $.create('div', 'page')
    this.$root.attr('data-type', 'page')
    this.$root.html(this.toHTML())
    return this.$root
  }

  toHTML() {}

  initComponents() {
    this.components = this.components.map(Component => {
      const $componentRoot = this.$root.find(Component.selector)
      const component = new Component($componentRoot, {observer: this.observer})
      $componentRoot.html(component.render())
    })
  }

  afterRender() {
    this.initComponents()
  }
}