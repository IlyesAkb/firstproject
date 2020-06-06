import {Component} from '@core/Component'
import {initSlider} from '@comps/CatalogSettings/catalogSettings.functions'
import {
  createCatalogSettings
} from '@comps/CatalogSettings/catalogSettings.template'

export class CatalogSettings extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: []
    })
  }

  static selector = '[data-type="catalogSettings"]'

  toHTML() {
    return createCatalogSettings()
  }

  afterRender() {
    super.afterRender()
    this.slider = initSlider()
  }
}