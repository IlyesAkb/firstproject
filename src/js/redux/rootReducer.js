import {CART_ADD, CART_CLEAR, CART_DELETE, CART_REMOVE} from '@/js/redux/types';

export function rootReducer(state, action) {
  let candidate
  switch (action.type) {
    case CART_ADD:
      candidate = state.cartItems.find(item => item.id === +action.data.id)
      if (candidate) {
        candidate.quantity++
      } else {
        action.data.quantity = 1
        state.cartItems.push(action.data)
      }
      console.log(state)
      return {...state}

    case CART_REMOVE:
      candidate = state.cartItems.find(item => item.id === +action.data)
      if (candidate.quantity <= 1) {
        state.cartItems =
            state.cartItems.filter(item => item.id !== +action.data)
      } else {
        candidate.quantity--
      }
      return {...state}

    case CART_CLEAR:
      return {...state, cartItems: []}

    case CART_DELETE:
      state.cartItems = state.cartItems.filter(i => i.id !== +action.data)
      return {...state}

    default:
      return state
  }
}