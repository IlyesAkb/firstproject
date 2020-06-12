import {Home} from '@comps/Home/Home';
import {Catalog} from '@comps/Catalog/Catalog';
import {BigCart} from '@comps/BigCart/BigCart';
import {Observer} from '@core/Observer';
import {createStore} from '@core/Store/createStore';
import {rootReducer} from '@/js/redux/rootReducer';
import {defaultState} from '@/js/redux/initialState';
import {App} from '@core/App/App';

export function routerConfig(options = {}) {
  return {
    routes: {
      home: Home,
      catalog: Catalog,
      cart: BigCart
    },
    ...options
  }
}

export function createApp() {
  const store = createStore(rootReducer, defaultState)
  const observer = new Observer()

  return new App('#app', {
    observer,
    store
  })
}