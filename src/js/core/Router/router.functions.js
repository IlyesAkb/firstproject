export function getPath() {
  return window.location.hash.slice(1)
}

export function redirect(path) {
  window.location.hash = path
}

