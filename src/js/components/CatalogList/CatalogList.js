import {ProductList} from '@comps/ProductList/ProductList'
import {getItems} from '@core/utils'

export class CatalogList extends ProductList {
  constructor($root, options = {}) {
    super($root, options)
    this.init()
  }

  init() {
    this.list = getItems(9)
    this.$subscribe('catalog-settings: change-count', count => {
      this.list = getItems(count)
      this.$root.clear()
      this.renderItems()
    })
  }
}