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