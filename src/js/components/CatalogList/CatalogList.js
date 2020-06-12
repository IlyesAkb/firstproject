import {ProductList} from '@comps/ProductList/ProductList'
import {getItems} from '@core/utils'

export class CatalogList extends ProductList {
  constructor($root, options = {}) {
    super($root, options)
  }

  getItems() {
    return getItems(9)
  }
}