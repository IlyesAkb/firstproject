import {ProductList} from '@comps/ProductList/ProductList'
import {getItems} from '@core/utils'

export class FeaturedList extends ProductList {
  constructor($root, options = {}) {
    super($root, options)
  }

  getItems() {
    return getItems(8)
  }
}