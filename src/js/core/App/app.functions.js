import {HomePage} from '@/js/Pages/HomePage'
import {Catalog} from '@/js/Pages/Catalog'
import {CartPage} from '@/js/Pages/CartPage'

export function routerConfig(options = {}) {
  return {
    routes: {
      home: HomePage,
      catalog: Catalog,
      cart: CartPage
    },
    ...options
  }
}