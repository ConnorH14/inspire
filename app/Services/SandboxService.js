import { ProxyState } from "../AppState.js"
import { BackgroundImage } from "../Models/BackgroundImage.js"
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
}

export const sandboxService = new SandboxService()