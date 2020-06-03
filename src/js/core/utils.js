export function getHandlerName(eventType) {
  return 'on' + eventType.charAt(0).toUpperCase() + eventType.slice(1)
}

export function getPrice(number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(number)
}

export function isEmpty(array = []) {
  return array.length <= 0
}

export function getItems(count) {
  if (!count || count < 0) {
    return
  }

  const items = []
  for (let i = 0; i < count; i++) {
    items.push({
      id: i + 1,
      name: 'mongo people t-shirt',
      price: 52,
      img: './assets/img/products/product-img-1.jpg'
    })
  }
  return items
}