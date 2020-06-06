import {ProductList} from '@comps/ProductList/ProductList'
import {getItems} from '@core/utils'

export class Catalog extends ProductList {
  constructor($root, options = {}) {
    super($root, options)
  }

  getItems() {
    return getItems(9)
  }
}