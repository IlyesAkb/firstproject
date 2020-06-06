import {Component} from '@core/Component'
import {Product} from '@/js/components/ProductList/Product'
import {isAdd} from '@/js/components/ProductList/porductList.functions'

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
    this.list = this.getItems()
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
    this.dispatch('product-list: add', product)
  }

  getItems() {
    throw new Error('method getItems is not implemented')
  }

  onClick(event) {
    if (isAdd(event.target)) {
      this.addToCart(event.target.dataset.id)
    }
  }
}