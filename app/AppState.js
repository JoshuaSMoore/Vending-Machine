import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Snack[]} */
  snacks = []
  Snack = [new Snack('Skittles', 5.00, 'Candy'), new Snack('Ruffles', 8.00, 'Chip'), new Snack('Red Bull', 15.00, 'Drink'), new Snack('Beef Jerky', 20.00, 'Protein')]

  currentFunds = 0
}




export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
