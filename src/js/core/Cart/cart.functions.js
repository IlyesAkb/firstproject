export function isRemove(target) {
  return target.dataset.type === 'cartRemove'
}

export function calcTotal(items = []) {
  return items.reduce((total, item) => {
    total += item.totalPrice
    return total
  }, 0)
}

export function calcCount(items = []) {
  return items.reduce((count, item) => {
    count += item.quantity
    return count
  }, 0)
}