import {ProxyState} from "../AppState.js"
import { Snack } from "../Models/Snack.js"


function _drawSnacks(){
let template = ''
ProxyState.snacks.forEach(snacks => {
template += `${snacks.name}`
})
  document.getElementById('snackList').innerHTML = template.toString()
}


export class SnackController{
  constructor(){
    _drawSnacks()
    this.getPaid()
  }
  getPaid(){
    ProxyState.currentFunds += .25
    document.getElementById('GetMoney').innerHTML = ProxyState.currentFunds.toString()
    console.log(ProxyState.currentFunds)
  }
}