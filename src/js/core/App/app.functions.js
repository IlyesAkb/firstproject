import {HomePage} from '@/js/Pages/HomePage'
import {CatalogPage} from '@/js/Pages/CatalogPage'
import {CartPage} from '@/js/Pages/CartPage'

export function routerConfig(options = {}) {
  return {
    routes: {
      home: HomePage,
      catalog: CatalogPage,
      cart: CartPage
    },
    ...options
  }
}