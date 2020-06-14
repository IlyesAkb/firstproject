import {Component} from '@core/Component'
import {initSlider} from '@comps/CatalogSettings/catalogSettings.functions'
import {$} from '@core/dom'
import {
  createCatalogSettings
} from '@comps/CatalogSettings/catalogSettings.template'

export class CatalogSettings extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['change']
    })
  }

  static selector = '[data-type="catalogSettings"]'

  toHTML() {
    return createCatalogSettings()
  }

  afterRender() {
    super.afterRender()
    this.slider = initSlider(this.$root.$el)
  }

  onChange(event) {
    const $target = $(event.target)
    if ($target.name === 'show') {
      const itemsCount = +$target.value()
      this.$emit('catalog-settings: change-count', itemsCount)
    }
  }
}