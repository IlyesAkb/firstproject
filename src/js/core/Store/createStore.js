export function createStore(rootReducer, initialState = {}) {
  let listeners = []
  let state = rootReducer({...initialState}, {action: '__INIT__'})

  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter(listener => listener !== fn)
        }
      }
    },

    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    },

    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}