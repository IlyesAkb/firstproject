import {
  CART_ADD,
  CART_CLEAR,
  CART_DELETE,
  CART_REMOVE,
  CHANGE_PAGE
} from '@/js/redux/types';

export function cartAdd(data) {
  return {
    type: CART_ADD,
    data
  }
}

export function cartRemove(data) {
  return {
    type: CART_REMOVE,
    data
  }
}

export function cartDelete(data) {
  return {
    type: CART_DELETE,
    data
  }
}

export function cartClear() {
  return {
    type: CART_CLEAR
  }
}

export function changePage(data) {
  return {
    type: CHANGE_PAGE,
    data
  }
}