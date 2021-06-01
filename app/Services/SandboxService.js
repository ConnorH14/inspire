import { ProxyState } from "../AppState.js"
import { BackgroundImage } from "../Models/BackgroundImage.js"
import { ListItem } from "../Models/ListItem.js"
import { Quote } from "../Models/Quote.js"
import { Weather } from "../Models/Weather.js"

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxService{
  async getBackgroundImg(){
    let res = await sandboxApi.get('images')
    ProxyState.backgroundImg = new BackgroundImage(res.data)
  }

  async getQuote(){
    let res = await sandboxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }

  async getWeather(){
    let res = await sandboxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  }

  async getItems(){
    let res = await sandboxApi.get('connor14/todos')
    ProxyState.listItems = res.data
    //console.log(ProxyState.listItems)
  }

  async addItem(item){
    //console.log(item)
    let res = await sandboxApi.post('connor14/todos', item)
    ProxyState.listItems = [...ProxyState.listItems, new ListItem(res.data)]
    //console.log(ProxyState.listItems)
    this.getItems()
  }

  async deleteItem(item){
    //console.log(item)
    await sandboxApi.delete('connor14/todos/' + item)
    ProxyState.listItems = ProxyState.listItems.filter(li => li._id != item)
  }

  async isChecked(item, check){
    if(check){
      //console.log(item, 'true')
      let res = await sandboxApi.put('connor14/todos/' + item._id, item)
      //console.log(res.data)
    }else{
      //console.log(item, 'false')
      let res = await sandboxApi.put('connor14/todos/' + item._id, item)
      //console.log(res.data)
    }
  }

}

export const sandboxService = new SandboxService()