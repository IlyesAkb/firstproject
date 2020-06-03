import {Component} from '@core/Component'
import {Product} from '@/js/components/ProductList/Product'
// import {PRODUCTS_LIST} from '@core/constants'
import {isAdd} from '@/js/components/ProductList/porductList.functions'
import {getItems} from '@core/utils'

export class ProductList extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['click']
    })
    this.list = []
    this.init()
  }

  init() {
    this.list = getItems(8)
  }

  static selector = '[data-type="productList"]'

  afterRender() {
    super.afterRender()
    this.list.forEach(product => {
      product = new Product(product)
      this.$root.append(product.render())
    })
  }

  addToCart(id) {
    const product = this.list.find(product => product.id === +id)
    this.observer.emit('product-list: add', product)
  }

  onClick(event) {
    if (isAdd(event.target)) {
      this.addToCart(event.target.dataset.id)
    }
  }
}